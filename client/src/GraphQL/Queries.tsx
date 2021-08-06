import { gql } from '@apollo/client';

export const DATING_TEXT = gql`
query Query {
  allTexts {
    _id
    owner {
      username
    }
    text
    score
    postDate
    comments {
     owner {
        username
      }
      text
    }
    display
    private
  }
}
`;

export const USER = gql `
query Query($userId: ObjectID) {
  user(_id: $userId) {
    username
    firstName
    lastName
    birthday
    email
    password
    rank
    avatar
    loggedIn
    datingTexts {
      text
      score
    }
    token
  }
}
`;
