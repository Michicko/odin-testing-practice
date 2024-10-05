import { add, divide, multiply, subtract } from "./calculator.js";

// add, subtract, divide, and multiply
test("add 2 and 3 should return 5", () => {
  expect(add(2, 3)).toEqual(5);
});

test("subtract 3 from 2 should return -1", () => {
  expect(subtract(2, 3)).toEqual(-1);
});

test("divide 6 by 2 should return 3", () => {
  expect(divide(6, 2)).toEqual(3);
});

test("divide 6 by 0 should return 0", () => {
  expect(divide(6, 0)).toEqual(0);
});

test("multiply 2 and 3 should return 6", () => {
  expect(multiply(2, 3)).toEqual(6);
});
