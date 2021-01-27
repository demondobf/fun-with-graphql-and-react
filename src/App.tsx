import { ApolloProvider } from '@apollo/client';
import client from 'services/graphql/client';
import HistoriesList from 'components/HistoriesList';

const App = () => (
  <ApolloProvider client={client}>
    <HistoriesList />
  </ApolloProvider>
);

export default App;
