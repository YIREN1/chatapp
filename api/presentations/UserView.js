class UserView {
  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.avatar = user.avatar;
  }
}

module.exports = UserView;
