const express = require('express');
const ChatbotController = require('../controllers/chatbot');

const router = express.Router();

router.post('/gateway', ChatbotController.dialogflowGateway);
router.post('/webhook', ChatbotController.dialogflowWebhook);

module.exports = router;
