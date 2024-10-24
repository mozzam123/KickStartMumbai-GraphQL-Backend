const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema/userSchema");
const { UserResolvers } = require("./resolvers/userResolver");
const { connectToDatabase } = require("./config/db");

// function to connect to mongoDB database
connectToDatabase();

const server = new ApolloServer({
  typeDefs,
  resolvers: UserResolvers,
});

startStandaloneServer(server, {
  listen: { port: 5800 },
}).then(({ url }) => {
  console.log("Server started at", url);
});
