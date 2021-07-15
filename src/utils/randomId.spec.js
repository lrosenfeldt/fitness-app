import randomId from "@utils/randomId";

describe("@utils: randomId", () => {
  // dangerous as it could the same by pure luck
  it("should not return the same number when rerun", () => {
    expect(randomId("a")).not.toEqual(randomId("a"));
  });

  it("should contain input string", () => {
    expect(randomId("input")).toMatch(/input/i);
  });
});
