const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { userDef } = require("./schema/userSchema");
const { teamDefs } = require("./schema/teamSchema");
const { UserResolvers } = require("./resolvers/userResolver");
const { teamResolvers } = require("./resolvers/teamResolver");
const { connectToDatabase } = require("./config/db");

// function to connect to mongoDB database
connectToDatabase();

// merge all typeDefs
const typeDefs = [userDef, teamDefs];

// merge all resolvers
const resolvers = [UserResolvers, teamResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 5800 },
}).then(({ url }) => {
  console.log("Server started at", url);
});
