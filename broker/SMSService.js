const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = 'VA7e5a0e19e382eb0e506ce2ced1e61949'

const client = require('twilio')(accountSid, authToken);

const sendVerification = async (to) => {
  // the commented code are creating a service, you can go https://www.twilio.com/console/verify/services
  // client.verify.services.create({ friendlyName: 'My Verify Service' })
  // .then(service => {
    // console.log(service.sid);
    client.verify.services(serviceSid)
      .verifications
      .create({ to, channel: 'sms' })
      .then(verification => console.log(verification.sid))
      .catch((err) => {
        console.error(err);
      });
  // })
}

const verificationCheck = async (to, code) => {
  client.verify.services(serviceSid)
      .verificationChecks
      .create({ to, code })
      .then(verification_check => console.log(verification_check.status));
}

// sendVerification();
// verificationCheck();

async function send(msg, number) {
  try {
    const msgId = await client.messages.create({
      to: number,
      from: process.env.PHONE,
      body: msg
    });
  } catch (err) {
    console.log(`error occured ${err}`)
  }
}

// function messageResponse() {
//     return (new MessagingResponse);
// }

module.exports = {
  send,
  sendVerification,
  verificationCheck,
  // messageResponse: messageResponse
}