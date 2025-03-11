#!/usr/bin/env python3
"""
Generate TypeScript enum files from ISO20022 code set JSON files.
"""

import json
import os
import re


def snake_to_camel(name):
    """Convert snake_case to CamelCase."""
    # Remove 'external_' prefix and '_code.json' suffix
    base_name = re.sub(r'^external_(.+)_code$', r'\1', name)
    base_name = re.sub(r'^external_(.+)$', r'\1', base_name)
    # Convert to camel case
    components = base_name.split('_')
    # Capitalize each component
    camel = ''.join(x.title() for x in components)
    return camel


def create_enum_file(json_file_path, output_dir):
    """Create a TypeScript enum file from a JSON code set file."""
    with open(json_file_path, 'r') as f:
        data = json.load(f)
    
    # Get base filename without extension
    base_name = os.path.basename(json_file_path).replace('.json', '')
    
    # Skip if the codes dictionary is empty
    codes = data.get('codes', {})
    if not codes:
        print(f"Skipping {base_name} - no codes found")
        return None
    
    # Convert to CamelCase for enum name
    enum_name = snake_to_camel(base_name)
    
    # Start building the TypeScript file content
    ts_content = []
    ts_content.append('/**')
    ts_content.append(f' * {data["description"]}')
    ts_content.append(' * ISO20022 External Code')
    ts_content.append(f' * Original name: {data["name"]}')
    ts_content.append(' */')
    ts_content.append(f'export enum {enum_name} {{')
    
    # Add enum values with descriptions as comments
    for code, description in codes.items():
        # Add description as a comment if it exists
        if description:
            ts_content.append(f'  /** {description} */')
        
        # Check if code starts with a digit and prefix with underscore for TypeScript compatibility
        enum_key = code
        if code and code[0].isdigit():
            enum_key = f"_{code}"
            
        # Add the enum value
        ts_content.append(f'  {enum_key} = "{code}",')
    
    # Close the enum
    ts_content.append('}')
    
    # Write the TypeScript file
    output_file_path = os.path.join(output_dir, f'{enum_name}.ts')
    with open(output_file_path, 'w') as f:
        f.write('\n'.join(ts_content))
    
    return enum_name


def create_index_file(enum_names, output_dir):
    """Create an index.ts file that exports all enums."""
    index_content = []
    
    # Export each enum
    for enum_name in enum_names:
        index_content.append(f'export {{ {enum_name} }} from "./{enum_name}";')
    
    # Write the index.ts file
    with open(os.path.join(output_dir, 'index.ts'), 'w') as f:
        f.write('\n'.join(index_content))


def main():
    code_sets_dir = 'code_sets'
    types_dir = 'types'
    
    # Ensure the output directory exists
    os.makedirs(types_dir, exist_ok=True)
    
    # Process each JSON file
    enum_names = []
    for filename in os.listdir(code_sets_dir):
        if filename.endswith('.json'):
            file_path = os.path.join(code_sets_dir, filename)
            enum_name = create_enum_file(file_path, types_dir)
            if enum_name:  # Only add if not None (skipped empty enums)
                enum_names.append(enum_name)
    
    # Create the index.ts file
    create_index_file(enum_names, types_dir)
    
    print(f"Generated {len(enum_names)} TypeScript enum files in the '{types_dir}' directory.")


if __name__ == "__main__":
    main()