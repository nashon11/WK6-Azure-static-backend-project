# Variables
$resourceGroup = "Project-RG"
$templateFile = "deploy.json"

# Deploy ARM template
az deployment group create --resource-group $resourceGroup --template-file $templateFile

# TODO: Add VM provisioning commands here, install Node.js, deploy backend code from GitHub