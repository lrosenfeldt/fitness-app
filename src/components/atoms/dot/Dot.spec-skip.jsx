import React from "react";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";

import Dot from ".";

describe("Dot Component", () => {
  const testId = "testid";

  it("should render correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Dot data-testid={testId} bgColor="#000000" />
      </ThemeProvider>
    );

    screen.logTestingPlaygroundURL();
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it("should use small font-size as base size", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Dot data-testid={testId} />
      </ThemeProvider>
    );

    expect(`${screen.getByTestId(testId).clientHeight}px`).toEqual(
      Theme.fontSize.small
    );
    expect(`${screen.getByTestId(testId).clientWidth}px`).toEqual(
      Theme.fontSize.small
    );
  });

  it("should accept size as argument", () => {
    const size = 30;
    render(
      <ThemeProvider theme={Theme}>
        <Dot data-testid={testId} size={`${size}px`} />
      </ThemeProvider>
    );

    expect(screen.getByTestId(testId).clientHeight).toEqual(
      Theme.fontSize.small
    );
    expect(screen.getByTestId(testId).clientWidth).toEqual(
      Theme.fontSize.small
    );
  });
});
