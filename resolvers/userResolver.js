const UserModel = require("./../models/userModel");

const UserResolvers = {
  Query: {
    async users() {
      const users = await UserModel.find();
      return users;
    },
    async user(_, args) {
      const user = await UserModel.find({_id: args.id});
      console.log('id: ', args.id);
      console.log(user);
      return user;
    },
  },
};

module.exports = { UserResolvers };
