const userDef = `#graphql
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
type Mutation {
  addUser(user: addUserInput!): User
  deleteUser(id:ID!): User
}
input addUserInput{
  name: String!,
  email: String,
  password: String!
}
`;

module.exports = { userDef };
