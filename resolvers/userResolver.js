const UserModel  = require("./../models/userModel");

const UserResolvers = {
  Query: {
    async users() {
      const users = await UserModel.find();
      return users;
    },
  },
};

module.exports = { UserResolvers };
