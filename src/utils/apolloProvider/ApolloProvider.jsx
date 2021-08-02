import {
  ApolloProvider as BasicApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SANITY_URI,
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => {
  return <BasicApolloProvider client={client}>{children}</BasicApolloProvider>;
};

export default ApolloProvider;
