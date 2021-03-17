import {gql} from 'apollo-boost';

const infoFragment = {
  info: gql`
    fragment infoValues on Info {
      next
      prev
      pages
    }
  `,
};

const characterSchema = {
  characters: gql`
    fragment characterInfo on Character {
      id
      name
      status
      species
      type
      gender
      image
      created
    }
  `,
};

export const fetchCharacters = gql`
  {
    characters {
      info {
        ...infoValues
      }
      results {
        ...characterInfo
      }
    }
  }
  ${infoFragment.info}
  ${characterSchema.characters}
`;

export const fetchCharacterByName = gql`
  query Characters($name: String!) {
    characters(filter: {name: $name}) {
      info {
        ...infoValues
      }
      results {
        ...characterInfo
        created
      }
    }
  }
  ${infoFragment.info}
  ${characterSchema.characters}
`;
