import React from "react";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";

import H3 from ".";

describe("H3 Component", () => {
  it("should render correctly", () => {
    const innerText = "Hello World";

    render(
      <ThemeProvider theme={Theme}>
        <H3>{innerText}</H3>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(innerText);
  });
});
