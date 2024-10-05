import sum from "./sum.js";

test("add 3 + 4 should equals 7", () => {
  expect(sum(3, 4)).toBe(7);
});
