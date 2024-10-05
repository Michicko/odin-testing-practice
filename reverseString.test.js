import reverseString from "./reverseString.js";

test("reverse bigjoe to eojgib", () => {
  expect(reverseString("bigjoe")).toMatch("eojgib");
});
