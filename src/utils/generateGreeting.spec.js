import generateGreeting from "@utils/generateGreeting";

describe("@utils: generateGreeting", () => {
  it("should contain username", () => {
    expect(generateGreeting(0, "John Doe")).toMatch(/John Doe/i);
  });

  it("should work with morning hours", () => {
    expect(generateGreeting(8, "Ged")).toMatch(/Morgen/i);
  });

  it("should work with evening hours", () => {
    expect(generateGreeting(15, "Ged")).toMatch(/Tag/i);
  });
});
