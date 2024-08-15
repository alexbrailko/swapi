import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($after: String) {
    allPeople(after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          birthYear
          height
          mass
        }
      }
    }
  }
`;
export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    person(id: $id) {
      name
      birthYear
      species {
        name
      }
      homeworld {
        name
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
`;
