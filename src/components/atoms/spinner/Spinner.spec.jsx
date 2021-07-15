import React from "react";
import { render } from "@testHelpers";
import "jest-styled-components";

import Spinner from ".";

describe("Spinner atom component", () => {
  it("should render correctly", () => {
    const spinnerElement = render(<Spinner />).container.firstChild;
    expect(spinnerElement).toBeInTheDocument();
  });
});
