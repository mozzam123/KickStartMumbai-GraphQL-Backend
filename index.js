const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema/userSchema");
const { resolvers } = require("./resolvers/userResolver");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/KickStartMumbai")
  .then(() => {
    console.log("Mongo connected for KickstartMumbai ");
  })
  .catch((error) => {
    console.log("Unexpected error in DB: ", error);
  });


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 5800 },
}).then(({ url }) => {
  console.log("Server started at", url);
});
