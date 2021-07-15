import React from "react";
import { screen, render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";

import Dot from ".";

describe("Dot Atom", () => {
  const testId = "testid";

  it("should be round with small font-size as size", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Dot data-testid={testId} />
      </ThemeProvider>
    );

    expect(screen.getByTestId(testId)).toHaveStyleRule(
      "height",
      Theme.fontSize.small
    );
    expect(screen.getByTestId(testId)).toHaveStyleRule(
      "width",
      Theme.fontSize.small
    );
  });

  it("should accept size as props", () => {
    const size = "30px";
    render(
      <ThemeProvider theme={Theme}>
        <Dot size={size} data-testid={testId} />
      </ThemeProvider>
    );

    expect(screen.getByTestId(testId)).toHaveStyleRule("height", size);
    expect(screen.getByTestId(testId)).toHaveStyleRule("width", size);
  });
});
