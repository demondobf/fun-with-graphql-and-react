import { ApolloProvider } from '@apollo/client';
import client from 'services/graphql/client';
import Histories from 'components/Histories';

const App = () => (
  <ApolloProvider client={client}>
    <Histories />
  </ApolloProvider>
);

export default App;
