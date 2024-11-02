const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { userDef } = require("./schema/userSchema");
const { teamDefs } = require("./schema/teamSchema");
const { tournamentDefs } = require("./schema/tournamentSchema");

const { UserResolvers } = require("./resolvers/userResolver");
const { teamResolvers } = require("./resolvers/teamResolver");
const { tournamentResolver } = require("./resolvers/tournamentResolver");
const { connectToDatabase } = require("./config/db");

// function to connect to mongoDB database
connectToDatabase();

// merge all typeDefs
const typeDefs = [userDef, teamDefs, tournamentDefs];

// merge all resolvers
const resolvers = [UserResolvers, teamResolvers, tournamentResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 5800 },
}).then(({ url }) => {
  console.log("Server started at", url);
});
