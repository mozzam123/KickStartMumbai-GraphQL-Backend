const tournamentModel = require("./../models/tournamentModel");

const tournamentResolver = {
  Query: {
    async tournaments() {
      const allTournaments = await tournamentModel.find();
      return allTournaments;
    },
  },
};


module.exports = { tournamentResolver };