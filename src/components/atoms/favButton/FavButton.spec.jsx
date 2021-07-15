import React from "react";
import { screen, render } from "@testHelpers";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

import FavButton from ".";

describe("FavButton atom component", () => {
  it("should be unfilled as default", () => {
    render(<FavButton />);
    const favButtonElement = screen.getByRole("button");

    expect(favButtonElement).not.toHaveStyleRule("background-image", /filled/i);
  });

  it("should fill on click", () => {
    render(<FavButton />);
    const favButtonElement = screen.getByRole("button");

    userEvent.click(favButtonElement);
    expect(favButtonElement).toHaveStyleRule("background-image", /filled/i);
    expect(favButtonElement).toHaveStyleRule("animation", /\S+/i);
  });

  it("should accept initial state as prop", () => {
    render(<FavButton isFav />);
    const favButtonElement = screen.getByRole("button");

    expect(favButtonElement).toHaveStyleRule("background-image", /filled/i);
    expect(favButtonElement).toHaveStyleRule("animation", /\S+/i);
  });
});
