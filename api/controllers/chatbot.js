// const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');
const { SessionsClient } = require('dialogflow');

const fireBaseServiceAccount = require('../chatbot.json');
const dialogServiceAccount = require('../chatbot-dialogflow.json');

admin.initializeApp({
  credential: admin.credential.cert(fireBaseServiceAccount),
  databaseURL: 'https://chatbot-8b2c3.firebaseio.com',
});

const dialogflowGateway = async (request, response) => {
  const { queryInput, sessionId } = request.body;

  const sessionClient = new SessionsClient({
    credentials: dialogServiceAccount,
  });
  const session = sessionClient.sessionPath('chatbot-vpfxxf', sessionId); // todo

  const responses = await sessionClient.detectIntent({ session, queryInput });

  const result = responses[0].queryResult;

  response.send(result);
};

const dialogflowWebhook = async (request, response) => {
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
    const profile = db.collection('users').doc('yiren');

    const { name, color } = result.parameters;

    await profile.set({ name, color });
    agent.add(`Welcome aboard my friend!`);
  };

  const intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('UserOnboarding', userOnboardingHandler);
  agent.handleRequest(intentMap);
};

module.exports = {
  dialogflowGateway,
  dialogflowWebhook,
};
