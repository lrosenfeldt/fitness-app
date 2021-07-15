import React from "react";
import { render, screen } from "@testHelpers";
import "jest-styled-components";
import userEvent from "@testing-library/user-event";
import { Route, MemoryRouter } from "react-router";

import ExitButton from ".";

describe("ExitButton atom component", () => {
  it("should render correctly", () => {
    render(<ExitButton />);

    expect(screen.getByRole("button")).toHaveStyleRule(
      "background-image",
      /.+/i
    );
  });

  it("should accept buttonType 'arrow' prop", () => {
    render(<ExitButton buttonType="arrow" />);

    expect(screen.getByRole("button")).toHaveStyleRule(
      "background-image",
      /arrow/i
    );
  });

  it("should go back in history on click", () => {
    const oldPath = "/old";
    render(
      <MemoryRouter initialEntries={[oldPath]}>
        <ExitButton />
        <Route path={oldPath}>
          <div>dummy</div>
        </Route>
      </MemoryRouter>
    );

    const exitButtonElement = screen.getByRole("button");
    userEvent.click(exitButtonElement);
    expect(screen.getByText(/dummy/i)).toBeInTheDocument();
  });
});
