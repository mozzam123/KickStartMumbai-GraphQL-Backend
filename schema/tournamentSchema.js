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
}

type AddResponse {
    message: String!
    tournament: Tournament
}
`;

module.exports = { tournamentDefs };
