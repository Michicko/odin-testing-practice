import analyzeArray from "./analyzeArray.js";

// average, min, max, and length

test("analyze array to return an object that contains average, min, max, and length", () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(Object.keys(analyzeArray(array))).toContain("average");
  expect(Object.keys(analyzeArray(array))).toContain("min");
  expect(Object.keys(analyzeArray(array))).toContain("max");
  expect(Object.keys(analyzeArray(array))).toContain("length");
});

test("analyze array to return the value of average, min, max, and length", () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array).average).toBe(4);
  expect(analyzeArray(array).min).toBe(1);
  expect(analyzeArray(array).max).toBe(8);
  expect(analyzeArray(array).length).toBe(6);
});

test("analyze array to return an object that contains average, min, max, and length", () => {
  const array = [3, 4, 1, 5, 2];
  expect(Object.keys(analyzeArray(array))).toContain("average");
  expect(Object.keys(analyzeArray(array))).toContain("min");
  expect(Object.keys(analyzeArray(array))).toContain("max");
  expect(Object.keys(analyzeArray(array))).toContain("length");
});

test("analyze array to return the value of average, min, max, and length", () => {
  const array = [3, 4, 1, 5, 2];
  expect(analyzeArray(array).average).toBe(3);
  expect(analyzeArray(array).min).toBe(1);
  expect(analyzeArray(array).max).toBe(5);
  expect(analyzeArray(array).length).toBe(5);
});
