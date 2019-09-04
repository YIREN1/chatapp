const UserView = require('./UserView');

const MessageView = (message, user) => {
  const view = Object.assign({}, message._doc, { user: new UserView(user) });
  delete view.userId;
  view.id = message._id;
  return view;
};

module.exports = MessageView;
