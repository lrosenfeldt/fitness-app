import { ApolloProvider as BasicApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const PROJECT_ID = "lldcxvcf";
const URI = `https://${PROJECT_ID}.api.sanity.io/`;


const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

const ApolloProvider = (props) => {
  return (
    <BasicApolloProvider client={client}>
      {props.children}
    </BasicApolloProvider>
  )
}

export default ApolloProvider;