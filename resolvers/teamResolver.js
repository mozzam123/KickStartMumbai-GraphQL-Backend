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
};

module.exports = { teamResolvers };
