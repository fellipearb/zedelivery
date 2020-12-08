import { ApolloClient, InMemoryCache } from '@apollo/client';

const ClientService = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache()
});

export default ClientService;