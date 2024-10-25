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
    deleteUser: async (_, args) => {
      try {
        // Find the user by ID
        const userToDelete = await UserModel.findById(args.id);

        // Check if the user exists
        if (!userToDelete) {
          return Error("User not found");
        }

        // Delete the user
        const deletedUser = await UserModel.findByIdAndDelete(args.id);

        // Return a success message or the deleted user
        return deletedUser;
      } catch (error) {
        console.error("Error in deleteUser:", error.message);
        throw new Error(`Error in deleteUser: ${error.message}`);
      }
    },
  },
};

module.exports = { UserResolvers };
