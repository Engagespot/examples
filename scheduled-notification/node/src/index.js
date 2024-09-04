const engagespot = require('@engagespot/node')

const apiKey = 'ENGAGESPOT_API_KEY';
const apiSecret = 'ENGAGESPOT_API_SECRET';

//Initialize Engagespot object
const client = new engagespot.EngagespotClient({apiKey, apiSecret});

const result = client.send({
    notification:{
        workflow:{
            identifier: 'workflow_identifier'
        }
    },
    sendAt: "2024-05-05T12:00:00.000Z", //Timestamp in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
    sendTo:{
        recipients: ["user-identifier"]
    }
});