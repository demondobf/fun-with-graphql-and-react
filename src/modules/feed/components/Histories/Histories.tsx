import { useQuery } from '@apollo/client';
import { GET_SPACEX_HISTORIES, HistoriesData } from 'services/api/spacex/histories';

import { Wrapper } from './Histories.styles';
import Article from 'modules/feed/components/Article';

const Histories = () => {
  const { loading, error, data } = useQuery<HistoriesData>(GET_SPACEX_HISTORIES);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  if (data) {
    return (
      <Wrapper>
        {data.histories.map(({ id, ...rest }) => (
          <Article key={id} {...rest} />
        ))}
      </Wrapper>
    );
  }

  return <h1>Sorry, no data available</h1>;
};

export default Histories;
