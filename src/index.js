import 'dotenv/config';
import axios from 'axios';

(async () => {

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  // Send a Message
  /*client.messages    
    .create({
      outcome: 'confirmed',
      from: 'whatsapp:+14155238886',
      body: 'Hello from NODE',
      to: 'whatsapp:+5519numero'
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));*/


  // GET MESSAGE Feedback URL  
  client.messages('messageSid')
    .feedback
    .create({ outcome: 'confirmed' })
    .then(feedback => console.log(feedback))
    .catch(error => console.error(error));
})();

