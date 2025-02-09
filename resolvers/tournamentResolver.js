const tournamentModel = require("./../models/tournamentModel");
const userModel = require("./../models/userModel");
const teamModel = require("./../models/teamModel");

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
      // Mutation to add team in a tournament.
      const updatedTournament = await tournamentModel.findByIdAndUpdate(
        args.id,
        args.tournament,
        {
          new: true,
          runValidators: true,
        }
      );

      return {
        message: "Tournament updated successfully",
        tournament: updatedTournament,
      };
    },
    async addTeamInTournament(_, args) {
      if (!args.teamID || !args.tournamentID) {
        throw new Error("Team ID or Tournament ID is not present");
      }
      const existingTeam = await teamModel.findById(args.teamID);

      if (!existingTeam) {
        throw new Error("Team does not exist");
      }

      const existingTournament = await tournamentModel.findById(
        args.tournamentID
      );

      if (!existingTournament) {
        throw new Error("Tournament does not exist!");
      }

      // Check if the team is already in the tournament
      if (
        existingTournament.teams &&
        existingTournament.teams.includes(args.teamID)
      ) {
        throw new Error("Team is already in the tournament!");
      }
      // Add the team to the tournament
      existingTournament.teams.push(args.teamID);
      await existingTournament.save();

      return {
        message: "Team successfully added to the tournament!",
        tournament: existingTournament,
      };
    },
  },
};

module.exports = { tournamentResolver };
