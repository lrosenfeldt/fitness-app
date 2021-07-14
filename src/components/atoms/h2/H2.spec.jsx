import React from "react";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";

import H2 from ".";

describe("H2 Component", () => {
  it("should render correctly", () => {
    const innerText = "Hello World";

    render(
      <ThemeProvider theme={Theme}>
        <H2>{innerText}</H2>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(innerText);
  });
});
