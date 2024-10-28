const UserModel = require("./../models/userModel");

const UserResolvers = {
  Query: {
    async users() {
      try {
        const users = await UserModel.find();
        return users;
      } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
      }
    },
    async user(_, args) {
      try {
        const user = await UserModel.findById(args.id);
        if (!user) {
          throw new Error(`User with ID ${args.id} not found`);
        }
        return user;
      } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
      }
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        if (!args.user.name || !args.user.password) {
          throw new Error("Please provide name and password fields");
        }
        const existingUser = await UserModel.findOne({ name: args.user.name });
        if (existingUser) {
          throw new Error("User already exists with this name");
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
          throw new Error("User not found");
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
