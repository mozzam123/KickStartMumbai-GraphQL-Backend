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
    teams: [Team!]
    team(id:ID!): Team
}

type Mutation{
    addTeam(team: addTeamInput!): Team
}

input addPlayerInput{
    name: String!,
    age: String!
}


input addTeamInput{
    name: String!,
    manager: String!
    players: [addPlayerInput!] # Using AddPlayerInput here instead of Player
}
`;

module.exports = { teamDefs };
