const tournamentDefs = `#graphql
type Tournament{
    _id: ID!,
    name: String!,
    date: String!,
    match_type: String!,
    location: String!,
    teams: [String]
    organizer: String!
}

type Query{
    tournaments: [Tournament!]
    tournament(id:ID!): Tournament
    deleteTournament(id:ID!): AddResponse
    updateTournament(id: ID!, tournament: addTournamentInput!): AddResponse
}

type AddResponse {
    message: String!
    tournament: Tournament
}

input addTournamentInput{
    name: String!,
    date: String!,
    match_type: String!,
    location: String!,
    teams: [String]
    organizer: String!
}
`;

module.exports = { tournamentDefs };
