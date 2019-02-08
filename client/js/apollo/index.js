import gql from "graphql-tag";

export const CreateDailyReport = gql`
  mutation CreateDailyReport(
    $date: DateTime!
    $pain: Int!
    $score: Float!
    $work: Int!
    $userId: String!
    $painDescription: String!
    $notes: String!
  ) {
    createDailyReport(
      date: $date
      pain: $pain
      score: $score
      userId: $userId
      work: $work
      painDescription: $painDescription
      notes: $notes
    ) {
      id
    }
  }
`;

export const CreateChallengeMutation = gql`
  mutation CreateChallenge(
    $endDate: DateTime!
    $startDate: DateTime!
    $score: [Float!]
    $userId: String!
    $daysBetween: Int!
  ) {
    createChallenge(
      endDate: $endDate
      startDate: $startDate
      score: $score
      userId: $userId
      daysBetween: $daysBetween
    ) {
      id
    }
  }
`;

export const UpdateChallengeMutation = gql`
  mutation UpdateChallenge($id: ID!, $score: [Float!]) {
    updateChallenge(id: $id, score: $score) {
      id
    }
  }
`;

// export const AllChallengesQuery = gql`
//   query AllChallenges {
//     allChallenges {
//       id
//       startDate
//       endDate
//       score
//       daysBetween
//     }
//   }
// `;

export const AllChallengesQuery = gql`
  query AllChallenges($userId: String) {
    allChallenges(filter: { userId: $userId }) {
      id
      startDate
      endDate
      score
      daysBetween
    }
  }
`;

export const UpdateUserMutation = gql`
  mutation UpdateUser(
    $id: ID!
    $firstname: String
    $lastname: String
    $email: String
    $password: String
  ) {
    updateUser(
      id: $id
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      firstname
      lastname
      email
      password
    }
  }
`;

export const QueryUser = gql`
  query queryUser($id: ID!) {
    User(id: $id) {
      id
      firstname
      lastname
      image
      email
    }
  }
`;

export const AllDataQuery = gql`
  {
    allChallenges {
      daysBetween
      endDate
      id
      score
      startDate
      userId
    }
    allWorkoutSessions {
      id
      day
      poses {
        description
        duration
        icon
        id
        title
        video
        heavyVideo
      }
    }
  }
`;
