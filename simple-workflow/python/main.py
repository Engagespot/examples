from engagespot import Engagespot

# Initialize the client with your API key and secret
client = Engagespot(api_key="ENGAGESPOT_API_KEY", api_secret="ENGAGESPOT_API_SECRET", data_region="us")

# Define the payload for the notification
send_request = {
    "notification": {
        "workflow": {
            "identifier": "workflow_identifier"
        }
    },
    "sendTo": {
        "recipients": ["user-id"]
    }
}

# Send the notification request
response = client.send(send_request)

# Check the response
print(response)
