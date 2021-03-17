/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
  Pane,
  Heading,
  withTheme,
  majorScale,
  Table,
  Avatar,
  Text,
  TextDropdownButton,
} from 'evergreen-ui';

import {useLazyQuery} from '@apollo/react-hooks';
import {fetchCharacterByName} from '../../../queries/fetchCharacters';
import {stableSort, getComparator} from './CharactersUtils';

const Characters = ({theme, data}) => {
  const {characters} = data;
  const [order, setOrder] = React.useState();
  const [orderBy, setOrderBy] = React.useState();
  const [searchCharacters, {error, data: searchData}] = useLazyQuery(
    fetchCharacterByName,
  );

  const handleSearch = (value) => {
    searchCharacters({variables: {name: value}});
  };

  const styles = {
    wrapperPane: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flex: 1,
    },
    heading: {
      size: 800,
      marginTop: majorScale(3),
      marginBottom: majorScale(3),
      width: '100%',
      textAlign: 'center',
    },
  };

  const tableHeaders = ['name', 'status', 'species', 'type', 'gender'];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  // Table header cells
  const renderHeader = ({key}) => (
    <Table.TextHeaderCell key={key} display="flex" alignItems="center">
      <TextDropdownButton
        name={key}
        textTransform="capitalize"
        onClick={createSortHandler(key)}
        icon={order === 'asc' && orderBy === key ? 'caret-up' : 'caret-down'}
      >
        {key === 'name' ? (
          <Table.SearchHeaderCell
            // eslint-disable-next-line no-console
            onClick={(e) => e.stopPropagation()}
            onChange={(value) => handleSearch(value)}
            placeholder="name"
          />
        ) : (
          key
        )}
      </TextDropdownButton>
    </Table.TextHeaderCell>
  );

  const renderRow = ({character}) => (
    <Table.Row name="row" height={50} key={character.id} id={character.id}>
      <Table.Cell name={character.name} display="flex" alignItems="center">
        <Avatar src={character.image} name={character.name} />
        <Text marginLeft={8} size={300} fontWeight={500}>
          {character.name}
        </Text>
      </Table.Cell>

      <Table.TextCell name={character.status}>
        {character.status}
      </Table.TextCell>
      <Table.TextCell name={character.species}>
        {character.species}
      </Table.TextCell>
      <Table.TextCell>{character.type || '--'}</Table.TextCell>
      <Table.TextCell>{character.gender}</Table.TextCell>
    </Table.Row>
  );

  return (
    <Pane {...styles.wrapperPane}>
      <Heading {...styles.heading}>Characters Page</Heading>
      <Table width="80%" alignSelf="center" border id="characterTable">
        <Table.Head background={theme.getTextColor('tealTint')} height={60}>
          {tableHeaders.map((key) => renderHeader({key}))}
        </Table.Head>
        <Table.VirtualBody id="charactersTableBody" height={540}>
          {error ? (
            <Heading size={600} textAlign="center">
              Character not found
            </Heading>
          ) : (
            stableSort(
              searchData?.characters?.results || characters.results,
              getComparator(order, orderBy),
            ).map((character) => renderRow({character}))
          )}
        </Table.VirtualBody>
      </Table>
    </Pane>
  );
};

export default withTheme(Characters);
