const UserModel = require("./../models/userModel");

const UserResolvers = {
  Query: {
    async users() {
      const users = await UserModel.find();
      return users;
    },
    async user(_, args) {
      // Use findById to get a single user
      const user = await UserModel.findById(args.id);
      return user; 
    },
  },
};

module.exports = { UserResolvers };
