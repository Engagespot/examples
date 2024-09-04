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
    override:{
      channel:{
        email:{
          replyTo: "replyToemail@yourdomain.com",
          bcc: ["bcc@yourdomain.com"],
          cc:["cc@yourdomain.com"],
        }
      }
    },
    sendTo:{
        recipients: ["user-identifier"]
    }
});