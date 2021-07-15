import React from "react";
import { screen, render } from "@testHelpers";
import { MemoryRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import NavLink from ".";

describe("NavLink atom component", () => {
  const path = "/somewhere";

  it("NavLink should route to somewhere", () => {
    render(
      <MemoryRouter>
        <NavLink to={path}>Link</NavLink>
        <Route path={path}>
          <p>dummy</p>
        </Route>
      </MemoryRouter>
    );
    const navLinkElement = screen.getByRole("link");
    expect(navLinkElement).toHaveTextContent(/link/i);
    userEvent.click(navLinkElement);
    expect(screen.getByText(/dummy/i)).toBeInTheDocument();
  });

  it("children should act as link", () => {
    render(
      <MemoryRouter>
        <NavLink to={path}>
          <div>children</div>
        </NavLink>
        <Route path={path}>
          <p>dummy</p>
        </Route>
      </MemoryRouter>
    );
    const childrenElement = screen.getByText(/children/i);
    userEvent.click(childrenElement);
    expect(screen.getByText(/dummy/i)).toBeInTheDocument();
  });
});
