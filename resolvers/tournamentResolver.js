const tournamentModel = require("./../models/tournamentModel");
const userModel = require("./../models/userModel")

const tournamentResolver = {
  Query: {
    // Query to get all tournaments
    async tournaments() {
      const allTournaments = await tournamentModel.find();
      return allTournaments;
    },

    // Query to get a single tournament by ID
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
  },

  Mutation: {
    // Mutation to delete a tournament by ID
    async deleteTournament(_, args) {
      if (!args.id) {
        throw new Error("Id is required");
      }
      const existingTournament = await tournamentModel.findById(args.id);
      if (!existingTournament) {
        throw new Error("Tournament does not exist");
      }
      const deletedTournament = await tournamentModel.findByIdAndDelete(
        args.id
      );
      return {
        message: "Tournament deleted successfully",
        tournament: deletedTournament,
      };
    },

    // Mutation to update a tournament by ID
    async updateTournament(_, args) {
      if (args.tournament.organizer) {
        const existingOrganizer = await userModel.findById(
          args.tournament.organizer
        );
        console.log(existingOrganizer);
        if (!existingOrganizer) {
          throw new Error("Organizer does not exist");
        }
      }
      if (!args.id) {
        throw new Error("Id is required");
      }
      const existingTournament = await tournamentModel.findById(args.id);
      if (!existingTournament) {
        throw new Error("Tournament does not exist");
      }

      const updatedTournament = await tournamentModel.findByIdAndUpdate(
        args.id,
        args.tournament,
        {
          new: true, // return the updated document
          runValidators: true, // validate fields before updating
        }
      );

      return {
        message: "Tournament updated successfully",
        tournament: updatedTournament,
      };
    },
  },
};

module.exports = { tournamentResolver };
