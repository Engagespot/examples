const engagespot = require('@engagespot/node')

const apiKey = 'ENGAGESPOT_API_KEY';
const apiSecret = 'ENGAGESPOT_API_SECRET';

//Initialize Engagespot object
const client = new engagespot.EngagespotClient({apiKey, apiSecret});


/**
 * Update the expo token to user's profile
 * This can be done using this backend library, 
 * or using the frontend API (using user-id and auth token instead of secret key)
 */
const result = client.createOrUpdateUser("expoUser", {
    expo: {
        tokens: ["ExponentPushToken[BCfLKML-NGQht7bPi34tMl]"]
    }
})

// Now send the notification
const send = client.send({
    notification:{
        workflow:{
            identifier: "mobilepush"
        }
    },
    sendTo:{
        "recipients":["expoUser"]
    }
})