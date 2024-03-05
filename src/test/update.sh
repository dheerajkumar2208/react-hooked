#!/bin/bash

# Array of variable values
variable_values=("at")  # Add more variable values as needed

# Common parameter name and value
param_name="param"
param_value="your_common_parameter_value"

# Loop through each variable value
for var_value in "${variable_values[@]}"; do
    # Construct the service name
    service_name="ewi-lilly-${var_value}-webapp"
    
    # Construct the parameter name
    full_param_name="/${service_name}/${param_name}"
    
    # Display information
    echo "Processing parameter for service: $service_name"
    echo "Parameter name: $full_param_name"
    echo "Parameter value: $param_value"
    
    # Check if parameter exists
    aws ssm get-parameter --name "$full_param_name" &>/dev/null
    if [ $? -eq 0 ]; then
        # If parameter exists, update it
        aws ssm put-parameter --name "$full_param_name" --value "$param_value" --overwrite
        echo "Parameter '$full_param_name' updated successfully."
    else
        # If parameter doesn't exist, create it
        aws ssm put-parameter --name "$full_param_name" --value "$param_value" --type "String" --overwrite "false"
        echo "Parameter '$full_param_name' created successfully."
    fi
    echo ""
done
