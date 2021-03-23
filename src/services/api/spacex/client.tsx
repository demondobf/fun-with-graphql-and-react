import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

interface SpacexClientProps {
  children: React.ReactChild;
}

const SpacexClient = ({ children }: SpacexClientProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default SpacexClient;
