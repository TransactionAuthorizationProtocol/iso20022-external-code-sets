#!/usr/bin/env python3
"""
Extract ISO20022 external code sets from a JSON file and create individual files for each code set.
Each output file will be named in snake case and contain the codes with their descriptions.
"""

import json
import os
import re


def camel_to_snake(name):
    """Convert camelCase or PascalCase string to snake_case."""
    # Replace "1Code" with "_code" to handle names like "ExternalPurpose1Code"
    name = re.sub(r'(\d+)([A-Z][a-z]+)', r'_\2', name)
    # Handle general camelCase to snake_case conversion
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()


def clean_description(description):
    """
    Clean up the description by removing control characters and extra whitespace.
    """
    if not description:
        return ""
    
    # Get first line
    first_line = description.split("\n")[0]
    
    # Remove control characters like \r, \n, etc.
    clean_desc = re.sub(r'[\r\n\t\f\v]', '', first_line)
    
    # Remove extra spaces
    clean_desc = re.sub(r'\s+', ' ', clean_desc).strip()
    
    return clean_desc


def extract_code_descriptions(description, enum_values):
    """
    Extract individual code descriptions from the main description text.
    The descriptions in ISO20022 are typically formatted as:
    *`CODE`-Description text
    """
    code_descriptions = {}
    
    # Initialize with empty descriptions
    for code in enum_values:
        code_descriptions[code] = ""
    
    # Look for code descriptions in the format *`CODE`-Description
    pattern = r"\*`([A-Z0-9]+)`-(.*?)(?=\n\*`|$)"
    matches = re.findall(pattern, description, re.DOTALL)
    
    for code, desc in matches:
        if code in code_descriptions:
            # Clean up the description - remove extra whitespace and newlines
            clean_desc = re.sub(r'\s+', ' ', desc.strip())
            code_descriptions[code] = clean_desc
    
    return code_descriptions


def remove_number_from_name(name):
    """Remove the number '1' from names like 'ExternalPurpose1Code'."""
    return re.sub(r'(\w+)1([A-Z][a-z]+)', r'\1\2', name)


def process_code_sets(input_file):
    """Process the code sets from input file and create individual files for each code set."""
    try:
        with open(input_file, 'r') as f:
            data = json.load(f)
        
        # Create output directory if it doesn't exist
        os.makedirs('code_sets', exist_ok=True)
        
        # Track the processed code sets
        processed = []
        
        # Only process items in the definitions section
        definitions = data.get('definitions', {})
        
        # Process each code set in definitions
        for code_set_name, code_set_data in definitions.items():
            # Skip non-External code sets or internal references
            if not code_set_name.startswith('External') or '$ref' in code_set_data:
                continue
            
            # Get the enum values
            enum_values = code_set_data.get('enum', [])
            
            # Skip empty enums
            if not enum_values:
                print(f"Skipping {code_set_name} - no enum values found")
                continue
                
            # Get the name without the number 1
            simplified_name = remove_number_from_name(code_set_name)
            
            # Convert the name to snake case for the filename
            output_filename = camel_to_snake(simplified_name) + '.json'
            output_path = os.path.join('code_sets', output_filename)
            
            # Get the description
            raw_description = code_set_data.get('description', f"ISO20022 {code_set_name} code set")
            
            # Clean up the description
            clean_desc = clean_description(raw_description)
            
            # Parse the descriptions for each code from the main description
            code_descriptions = extract_code_descriptions(raw_description, enum_values)
            
            # Prepare the output data structure
            output_data = {
                "description": clean_desc,
                "name": code_set_name,  # Keep the original name with number
                "codes": code_descriptions
            }
            
            # Write to the output file with pretty formatting
            with open(output_path, 'w') as f:
                json.dump(output_data, f, indent=2, sort_keys=True)
            
            processed.append(f"Created {output_path}")
        
        return processed
    
    except json.JSONDecodeError:
        return ["Error: The input file contains invalid JSON."]
    except FileNotFoundError:
        return [f"Error: Input file '{input_file}' not found."]
    except Exception as e:
        return [f"Error: {str(e)}"]


if __name__ == "__main__":
    input_file = "external_code_sets.json"
    results = process_code_sets(input_file)
    
    for result in results:
        print(result)