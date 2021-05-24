import {
  ApolloProvider as BasicApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://lldcxvcf.api.sanity.io/v1/graphql/production/default",
  uri: "https://e24aqc8d.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => {
  return <BasicApolloProvider client={client}>{children}</BasicApolloProvider>;
};

export default ApolloProvider;
