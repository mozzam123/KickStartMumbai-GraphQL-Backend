const tournamentModel = require("./../models/tournamentModel");

const tournamentResolver = {
  Query: {
    async tournaments() {
      const allTournaments = await tournamentModel.find();
      return allTournaments;
    },
    async tournament(_, args) {
      if (!args.id) {
        throw new Error("Id is required");
      }
      const existingTournament = await tournamentModel.findById(args.id);
      if (!existingTournament) {
        throw new Error("Tournament does not exist");
      }

      return existingTournament;
    },
    async deleteTournament(_, args) {
      if (!args.id) {
        throw new Error("Id is required");
      }
      const existingTournament = await tournamentModel.findById(args.id);
      if (!existingTournament) {
        throw new Error("Tournament does not exist");
      }
      const deletedTournament = await tournamentModel.findByIdAndDelete(args.id)
      return {
        message: "Team deleted Succesfully",
        tournament: deletedTournament,
      };
    },
    async updateTournament(_, args){
      console.log(args);
    }
  },
};

module.exports = { tournamentResolver };
