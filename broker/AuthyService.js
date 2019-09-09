const API_KEY = process.env.AUTHY_API_KEY;
const authy = require('authy')(API_KEY);

const sendApprovalRequest = user => {
  const authyId = user.authyId || '171179856';
  return new Promise((resolve, reject) => {
    authy.send_approval_request(
      authyId,
      {
        message:
          'Request to login to Angular two factor authentication with Twilio',
      },
      null,
      null,
      (err, authResponse) => {
        if (err) {
          // res.status(400).send('Bad Request');
          console.log(err);
          reject(err);
        } else {
          const authToken = authResponse.approval_request.uuid;
          // console.log(`token: ${authToken}`);
          resolve(authToken);
          // res.status(200).send({ token: authResponse.approval_request.uuid });
        }
      },
    );
  });
};

module.exports = {
  sendApprovalRequest,
};
