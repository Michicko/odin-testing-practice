const analyzeArray = (array) => {
  const average = array.reduce((prev, curr) => curr + prev, 0) / array.length;
  const min = array.reduce((prev, curr) => (curr < prev ? curr : prev));
  const max = array.reduce((prev, curr) => (curr > prev ? curr : prev));
  const { length } = array;
  return { average, max, min, length };
};

export default analyzeArray;
