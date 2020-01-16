const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}

    # type LaunchConnection { # add this below the Query type as an additional type.
    #     cursor: String!
    #     hasMore: Boolean!
    #     launches: [Launch]!
    # }

    type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): String # login token
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    type Rocket {
        id: ID!
        name: String
        type: String
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    type User {
        id: ID!
        email: String!
        trips: [Launch]!
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    enum PatchSize {
        SMALL
        LARGE
    }
`;

module.exports = typeDefs;