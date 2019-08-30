const express = require('express');
const passport = require('passport');

const catchError = require('../util/catchError');
// const CurrentUserView = require('../lib/services/userService/CurrentUserView');

const passportJWT = passport.authenticate('jwt', { session: false });
const router = express.Router();
const channelService = require('../services/ChannelService');
// const userService = require('../services/UserService');

router.get(
  '/v1/channels/all',
  passportJWT,
  catchError(async (req, res) => {
    const channels = await channelService.getPublicChannels();
    res.json(channels);
  }),
);

router.get(
  '/v1/channels',
  passportJWT,
  catchError(async (req, res) => {
    const channels = await channelService.getChannels(req.user.id);
    res.json(channels);
  }),
);

router.get(
  '/v1/channels/:channelId',
  passportJWT,
  catchError(async (req, res) => {
    const { channelId } = req.params;
    const channel = await channelService.getChannel(channelId);
    res.json(channel);
  }),
);

// router.put(
//   '/v1/channels/:channelId/set-unread-messages',
//   passportJWT,
//   catchError(async (req, res) => {
//     const { channelId } = req.params;
//     const userId  = req.user.id;
//     const { unreadMessages } = req.body;
//     const user = await userService.setUnreadMessages(
//       userId,
//       channelId,
//       unreadMessages,
//     );
//     res.json(new CurrentUserView(user));
//   }),
// );

router.post(
  '/v1/channels',
  passportJWT,
  catchError(async (req, res) => {
    const userId = req.user.id;
    const { name, usersInChannel, type } = req.body;
    const channel = await channelService.createChannel(
      userId,
      name,
      type,
      usersInChannel,
    );
    res.json(channel);
  }),
);

// router.put(
//   '/v1/channels/:channelId/last-visit',
//   passportJWT,
//   catchError(async (req, res) => {
//     const  userId  = req.user.id;
//     const { channelId } = req.params;
//     const user = await userService.setLastVisitedChannel(userId, channelId);
//     res.json(new Current(user));
//   }),UserView
// );

router.put(
  '/v1/channels/:channelId/join',
  passportJWT,
  catchError(async (req, res) => {
    const userId = req.user.id;
    const { channelId } = req.params;
    const channel = await channelService.joinChannel(userId, channelId);
    res.json(channel);
  }),
);

router.put(
  '/v1/channels/:channelId/leave',
  passportJWT,
  catchError(async (req, res) => {
    const userId = req.user.id;
    const { channelId } = req.params;
    const channel = await channelService.leaveChannel(userId, channelId);
    res.json(channel);
  }),
);

module.exports = router;
