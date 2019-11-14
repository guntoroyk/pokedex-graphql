import { gql } from 'apollo-boost';

export const FETCH_POKEMONS = gql`
  query {
    pokemons (first: 20) {
      id,
      number,
      name,
      types
    }
  }
`;
