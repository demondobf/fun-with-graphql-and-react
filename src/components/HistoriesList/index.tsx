import { useQuery } from '@apollo/client';
import SPACEX_HISTORIES, { HistoryData } from 'services/graphql/spacex-histories';
import HistoriesListContainer from './HistoriesListContainer';
import HistoryListItem from 'components/HistoryListItem';

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
