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

type Query{
    teams: [Team]
}
`;

module.exports = { teamDefs };
