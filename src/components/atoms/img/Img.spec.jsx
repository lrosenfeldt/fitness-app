import React from "react";
import { screen, render } from "@testing-library/react";
import "jest-styled-components";

import iconHome from "assets/images/icon_home.png";
import Img from ".";

describe("Img Component", () => {
  const altText = "some text";

  it("should render correctly", () => {
    render(<Img src={iconHome} alt={altText} />);
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  it("should accept portrait as prop", () => {
    render(<Img src={iconHome} alt={altText} portrait />);
    expect(screen.getByAltText(altText)).toHaveStyleRule("width", "auto");
  });
});
