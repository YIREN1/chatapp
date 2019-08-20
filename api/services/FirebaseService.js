const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({
  origin: true,
});
const { WebhookClient } = require('dialogflow-fulfillment');
const { SessionsClient } = require('dialogflow');

const serviceAccount = require('../chatbot.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chatbot-8b2c3.firebaseio.com',
});

exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const { queryInput, sessionId } = request.body;

    const sessionClient = new SessionsClient({ credentials: serviceAccount });
    const session = sessionClient.sessionPath('your-project', sessionId); // todo

    const responses = await sessionClient.detectIntent({ session, queryInput });

    const result = responses[0].queryResult;

    response.send(result);
  });
});

exports.dialogflowWebhook = functions.https.onRequest(
  async (request, response) => {
    const agent = new WebhookClient({ request, response });

    console.log(JSON.stringify(request.body));

    const result = request.body.queryResult;

    const welcome = () => {
      agent.add(`Welcome to my agent!`);
    };

    const fallback = () => {
      agent.add(`Sorry, can you try again?`);
    };

    const userOnboardingHandler = async () => {
      const db = admin.firestore();
      const profile = db.collection('users').doc('jeffd23');

      const { name, color } = result.parameters;

      await profile.set({ name, color });
      agent.add(`Welcome aboard my friend!`);
    };

    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('UserOnboarding', userOnboardingHandler);
    agent.handleRequest(intentMap);
  },
);
