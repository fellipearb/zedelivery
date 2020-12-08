import ApolloClient from 'apollo-boost';

const ClientService = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql'  
});

export default ClientService;