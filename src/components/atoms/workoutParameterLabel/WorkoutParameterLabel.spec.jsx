import React from "react";
import { screen, render } from "@testHelpers";

import WorkoutParameterLabel from ".";

describe("WorkoutParameterLabel atom component", () => {
  it("should translate category", () => {
    render(
      <WorkoutParameterLabel
        calories="17"
        categories="strength"
        duration="12"
      />
    );
    const element = screen.getByText(/kcal/i);

    expect(element).not.toHaveTextContent("strength");
  });

  it("should show display fallbacks", () => {
    render(<WorkoutParameterLabel categories="untranslated category" />);
    const element = screen.getByText(/kcal/i);

    expect(element).toHaveTextContent(/\S+ kcal/i);
    expect(element).not.toHaveTextContent(/Min./i);
    expect(element).toHaveTextContent(/so schnell du kannst/i);
    expect(element).toHaveTextContent(/untranslated category/i);
  });
});
