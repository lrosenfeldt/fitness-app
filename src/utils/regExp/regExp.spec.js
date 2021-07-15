import { cssSizeRe } from ".";

describe("@util/regExp: cssSizeRe", () => {
  it("should not match without input", () => {
    expect(cssSizeRe.test("")).toBeFalsy();
  });

  it("should match size with unit and comma", () => {
    expect(cssSizeRe.test("30.5px")).toBeTruthy();
    expect(cssSizeRe.test(".5rem")).toBeTruthy();
    expect(cssSizeRe.test("1.25em")).toBeTruthy();
  });

  it("should fail with only numbers", () => {
    expect(cssSizeRe.test("20")).toBeFalsy();
    expect(cssSizeRe.test("0.5")).toBeFalsy();
    expect(cssSizeRe.test(".5")).toBeFalsy();
  });
});
