import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import PageLoader from '../../shared/PageLoader';
import {fetchCharacters} from '../../../queries/fetchCharacters';

import Characters from './Characters';

const CharactersPage = () => {
  return <PageLoader page={Characters} resources={useQuery(fetchCharacters)} />;
};

export default CharactersPage;
