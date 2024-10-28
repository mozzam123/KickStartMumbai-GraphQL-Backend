const teamModel = require("./../models/teamModel");

const teamResolvers = {
  Query: {
    async teams() {
      const allTeams = await teamModel.find();
      return allTeams;
    },
  },
};

module.exports = { teamResolvers };
