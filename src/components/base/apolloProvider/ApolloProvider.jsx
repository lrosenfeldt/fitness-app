import { ApolloProvider as BasicApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: "https://lldcxvcf.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

const ApolloProvider = (props) => {
  return (
    <BasicApolloProvider client={client}>
      {props.children}
    </BasicApolloProvider>
  )
}

export default ApolloProvider;