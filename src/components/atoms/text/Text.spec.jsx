import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "theme/Theme";

import Text from ".";

describe("Text component", () => {
  const testId = "testid";
  it("should render correctly", () => {
    const innerText = "foo bar";
    render(
      <ThemeProvider theme={Theme}>
        <Text data-testid={testId}>{innerText}</Text>
      </ThemeProvider>
    );

    expect(screen.getByText(innerText)).toBeInTheDocument();
  });

  it("small prop should reduce font-size", () => {
    const innerText = "foo bar";
    render(
      <ThemeProvider theme={Theme}>
        <Text small>{innerText}</Text>
      </ThemeProvider>
    );
    const textElement = screen.getByText(innerText);
    expect(
      window.getComputedStyle(textElement, null).getPropertyValue("font-size")
    ).toEqual(Theme.fontSize.small);
  });
});
