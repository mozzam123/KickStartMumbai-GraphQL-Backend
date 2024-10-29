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
    addTeam(team: addTeamInput!): AddTeamResponse
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

type AddTeamResponse {
    message: String!
    team: Team
}
`;

module.exports = { teamDefs };