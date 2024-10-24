const UserModel  = require("./../models/userModel");

const resolvers = {
  Query: {
    async users() {
      const users = await UserModel.find();
      console.log("*****");
      console.log(users);
      return users;
    },
  },
};

module.exports = { resolvers };
