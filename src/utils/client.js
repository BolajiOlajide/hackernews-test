import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const uri = 'https://www.graphqlhub.com/playground';
const httpLink = createHttpLink({ uri });

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  }
});
