import 'dotenv/config';
import axios from 'axios';

(async () => {

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      body: 'Hello from NODE',
      to: 'whatsapp:+19999785738'
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
})();

