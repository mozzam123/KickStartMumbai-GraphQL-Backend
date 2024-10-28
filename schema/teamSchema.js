const teamDefs = `#graphql
type Player{
    _id: ID!,
    name: String!,
    age: String!
}

type Team{
    _id: ID!,
    name: String!,
    manager: String!
    players: [Player!]

}
`;

module.exports = { teamDefs };
