const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const server = new ApolloServer({});

startStandaloneServer(server, {
  listen: { port: 5800 },
}).then(({ url }) => {
  console.log("Server started at", url);
});
