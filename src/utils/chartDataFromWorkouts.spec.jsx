import chartDataFromWorkouts from "@utils/chartDataFromWorkouts";

describe("@utils: chartDataFromWorkouts", () => {
  const [category1, category2, category3] = [
    "willNotBeTranslated",
    "willNotBeTranslatedEither",
    "willNotBeTranslatedAgain",
  ];
  const dummyWorkouts = [
    {
      Workout: {
        categories: [category1, category2],
      },
    },
    {
      Workout: {
        categories: [category3],
      },
    },
    {
      Workout: {
        categories: [category2],
      },
    },
  ];
  // construct simple hex colors from index
  const colors = new Array(dummyWorkouts.length).fill("").map((_, index) => {
    let str = Number(index).toString(16);
    str = str.length === 1 ? `0${str}` : str;
    return `#${str.repeat(3)}`;
  });

  it("should calculate ratios for multi-category workouts", () => {
    const output = chartDataFromWorkouts(dummyWorkouts, colors);
    expect(output).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: category1, value: 0.5 }),
        expect.objectContaining({ title: category2, value: 1.5 }),
        expect.objectContaining({ title: category3, value: 1 }),
      ])
    );
  });

  it("should map different categories to different colors", () => {
    const output = chartDataFromWorkouts(dummyWorkouts, colors);
    expect(output[0].color).not.toEqual(output[1].color);
  });
});
