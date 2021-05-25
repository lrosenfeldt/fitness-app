import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ApolloProvider from "components/base/apolloProvider/ApolloProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./theme/GlobalStyles";
import Theme from "./theme/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ApolloProvider>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
