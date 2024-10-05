const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => {
  if (a < 1 || b < 1) return 0;
  return a / b;
};
const multiply = (a, b) => a * b;

export { add, subtract, divide, multiply };
