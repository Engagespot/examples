import { EngagespotClient } from "@engagespot/node";

const apiKey = 'ENGAGESPOT_API_KEY';
const apiSecret = 'ENGAGESPOT_API_SECRET';

//Initialize Engagespot object
const client = EngagespotClient({apiKey, apiSecret});

const result = client.send({
    notification:{
        workflow:{
            identifier: 'workflow_identifier'
        }
    },
    sendTo:{
        recipients: [{
            "email": "test@test.com",
            "identifier": "unique-user-identifier"
        }]
    }
});