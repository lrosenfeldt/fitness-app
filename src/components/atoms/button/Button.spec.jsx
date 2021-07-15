import React from "react";
import { screen, render } from "@testHelpers";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import Button from ".";

describe("Button atom component", () => {
  it("button onClick is executed", () => {
    const mockFunc = jest.fn();
    render(
      <Button buttonType="button" onClickHandler={mockFunc}>
        Click me
      </Button>
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/Click me/i);
    userEvent.click(buttonElement);
    expect(mockFunc).toHaveBeenCalled();
  });

  it("link should get you somewhere", () => {
    const path = "/somewhere";
    render(
      <MemoryRouter>
        <Button buttonType="link" to={path}>
          To somewhere
        </Button>

        <Switch>
          <Route path={path}>
            <p>new location</p>
          </Route>
        </Switch>
      </MemoryRouter>
    );
    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toHaveTextContent(/To somewhere/i);
    userEvent.click(buttonElement);
    expect(screen.getByText(/location/i)).toBeInTheDocument();
  });
});
