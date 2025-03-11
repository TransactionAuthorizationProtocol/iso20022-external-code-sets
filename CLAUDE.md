# ISO20022 Code Sets Repository Guide

## Commands
- Validate JSON: `jq . external_code_sets.json`
- Format JSON: `jq . external_code_sets.json > temp.json && mv temp.json external_code_sets.json`

## Code Style Guidelines
- This repository contains JSON data for ISO20022 code sets
- Format JSON files with proper indentation (2 spaces)
- Keys should follow camelCase naming convention
- Always validate JSON structure before committing changes
- Maintain alphabetical ordering of keys where possible
- Include clear descriptions for all code values
- Use consistent date formats (ISO 8601: YYYY-MM-DD)
- Each code set should include metadata about its source and version
- Document any code mappings or relationships clearly

## Repository Purpose
This repository contains structured data for ISO20022 code sets used in financial messaging.
Always verify code values against official ISO20022 documentation when making updates.