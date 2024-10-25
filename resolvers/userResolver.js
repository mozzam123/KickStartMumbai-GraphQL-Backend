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
  Mutation: {
    addUser: async (_, args) => {
      try {
        if (!args.user.name || !args.user.password) {
          return Error("Please provide name and password fields");
        }
        const existingUser = await UserModel.findOne({ name: args.user.name });
        if (existingUser) {
          return Error("User already exists with this name");
        }

        // Create new user
        const newUser = await UserModel.create({
          name: args.user.name,
          password: args.user.password,
          email: args.user.email,
        });
        console.log(newUser);

        return newUser;
      } catch (error) {
        console.error("Error in addUser:", error.message);
        throw new Error(`Error in addUser: ${error.message}`);
      }
    },
  },
};

module.exports = { UserResolvers };
