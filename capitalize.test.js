import capitalize from "./capitalize.js";

test("capitalize big should be Big", () => {
  expect(capitalize("big")).toMatch("Big");
});

test("capitalize zero should be Zero", () => {
  expect(capitalize("zero")).toMatch("Zero");
});
