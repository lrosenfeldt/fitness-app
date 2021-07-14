import React from "react";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";

import H1 from ".";

describe("H1 Component", () => {
  it("should render correctly", () => {
    const innerText = "Hello World";

    render(
      <ThemeProvider theme={Theme}>
        <H1>{innerText}</H1>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(innerText);
  });
});
