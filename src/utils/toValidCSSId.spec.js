import toValidCSSId from "@utils/toValidCSSId";

describe("@utils: toValidCSSId", () => {
  it("should not affect CamelCase", () => {
    expect(toValidCSSId("CamelCase")).toEqual("CamelCase");
  });

  it("should handle whitespaces", () => {
    expect(toValidCSSId("spaces are here")).toEqual("spaces-are-here");
    expect(toValidCSSId(" at the beginning")).toEqual("_at-the-beginning");
  });
});
