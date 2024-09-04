# Simple Workflow with CURL

```bash
curl -X POST https://api.engagespot.co/v3/notifications \
-H "Content-Type: application/json" \
-H "x-api-key: ENGAGESPOT_API_KEY" \
-H "x-api-secret: ENGAGESPOT_API_SECRET" \
-d '{
  "notification": {
    "workflow": {
      "identifier": "workflow_identifier"
    }
  },
  "sendTo": {
    "recipients": ["user-id"]
  }
}'
```