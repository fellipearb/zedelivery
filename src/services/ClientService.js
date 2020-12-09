import ApolloClient, { InMemoryCache } from 'apollo-boost';

const ClientService = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache(),
});

export default ClientService;