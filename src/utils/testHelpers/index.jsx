import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";
import GlobalStyles from "theme/GlobalStyles";
import ApolloProvider from "@utils/apolloProvider/ApolloProvider";

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ApolloProvider>{children}</ApolloProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
