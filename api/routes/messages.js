const express = require('express');
const passport = require('passport');
const catchError = require('../util/catchError');

const passportJWT = passport.authenticate('jwt', { session: false });
const router = express.Router();
const messageService = require('../services/MessageService');

// router.get(
//   '/v1/replies/:messageId',
//   passportJWT,
//   catchError(async (req, res) => {
//     const { messageId } = req.params;
//     const views = await replyService.getReplyViews(messageId);
//     res.json(views);
//   }),
// );

router.get(
  '/v1/messages/:channelId',
  passportJWT,
  catchError(async (req, res) => {
    const { channelId } = req.params;
    const views = await messageService.getMessageViews(channelId);
    res.json(views);
  }),
);

router.delete(
  '/v1/messages/:messageId',
  passportJWT,
  catchError(async (req, res) => {
    const { messageId } = req.params;
    const { userId } = req.session;
    const view = await messageService.deleteMessage(userId, messageId);
    res.json(view);
  }),
);

router.put(
  '/v1/messages/:messageId',
  passportJWT,
  catchError(async (req, res) => {
    const { messageId } = req.params;
    const { userId } = req.session;
    const { text } = req.body;
    const view = await messageService.updateMessage(userId, messageId, text);
    res.json(view);
  }),
);

module.exports = router;
