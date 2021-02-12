import { useQuery } from '@apollo/client';
import SPACEX_HISTORIES, { HistoryData } from 'services/graphql/spacex-histories';

import { Wrapper } from './styles';
import Article from 'components/Article';

const Histories = () => {
  const { loading, error, data } = useQuery<HistoryData>(SPACEX_HISTORIES);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  return (
    <Wrapper>
      {data?.histories.map(({ id, ...rest }) => (
        <Article key={id} {...rest} />
      ))}
    </Wrapper>
  );
};

export default Histories;
