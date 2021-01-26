import { useQuery } from '@apollo/client';
import HistoryListItem from './HistoryListItem';
import SPACEX_HISTORIES, { HistoryData } from 'graphql-service/spacex-histories';
import HistoriesListContainer from './HistoriesListContainer';

const HistoriesList = () => {
  const { loading, error, data } = useQuery<HistoryData>(SPACEX_HISTORIES);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  return (
    <HistoriesListContainer>
      {data?.histories.map(({ id, ...rest }) => (
        <HistoryListItem key={id} {...rest} />
      ))}
    </HistoriesListContainer>
  );
};

export default HistoriesList;
