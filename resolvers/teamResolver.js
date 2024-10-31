const teamModel = require("./../models/teamModel");

const teamResolvers = {
  Query: {
    async teams() {
      const allTeams = await teamModel.find();
      return allTeams;
    },
    async team(_, args) {
      if (!args.id) {
        throw new Error("Team Id should be UUID");
      }
      const existingTeam = await teamModel.findById(args.id);
      if (!existingTeam) {
        throw new Error("Team does not found!");
      } else {
        return existingTeam;
      }
    },
  },
  Mutation: {
    addTeam: async (_, args) => {
      if (!args.team.manager) {
        throw new Error("manager key is required");
      }

      if (!args.team.name) {
        throw new Error("name key is required");
      }
      // Create new team
      const newTeam = await teamModel.create({
        name: args.team.name,
        manager: args.team.manager,
        players: args.team.players,
      });

      return {
        message: "Team saved successfully",
        team: newTeam,
      };
    },
    deleteTeam: async (_, args) => {
      if (!args.id) {
        throw new Error("cannot leave id blank");
      }
      const existingTeam = await teamModel.findById(args.id);
      if (!existingTeam) {
        throw new Error("Team does not exist");
      }
      const deletedTeam = await teamModel.findByIdAndDelete(args.id);
      return {
        message: "Team Deleted successfully",
        team: deletedTeam,
      };
    },
    updateTeam: async (_, args) => {
      if (!args.id) {
        throw new Error("cannot leave id blank");
      }
      const existingTeam = await teamModel.findById(args.id);
      if (!existingTeam) {
        throw new Error("Team not found!!");
      }

      const updateExistingTeam = await teamModel.findByIdAndUpdate(
        args.id,
        args.team,
        {
          new: true,
          runValidators: true,
        }
      );
      return {
        message: "Team Updated successfully",
        team: updateExistingTeam,
      };
    },
  },
};

module.exports = { teamResolvers };
