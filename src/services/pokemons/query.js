import { gql } from 'apollo-boost';

export const FETCH_POKEMONS = gql`
  query 
    getPokemons ($first: Int!) {
      pokemons (first: $first) {
      id,
      number,
      name,
      types,
      image
    }
    }
`;
