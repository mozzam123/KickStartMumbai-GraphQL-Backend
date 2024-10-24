const typeDefs = `#graphql
type User{
  _id: ID!,
  name: String!,
  email: String,
  password: String!
}
type Query {
    users: [User]
    user(id:ID!): User
}
`;

module.exports = { typeDefs };
