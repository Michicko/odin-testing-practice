const createCypherText = (shift) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const shiftedArray = alphabets.slice(0, shift);
  const cypher = alphabets.slice(shift).concat(shiftedArray);
  return { cypher, alphabets };
};

const isUpper = (char) => /[A-Z]/.test(char);

const caesarCipher = (str, shift) => {
  const { cypher, alphabets } = createCypherText(shift);
  let encryption = "";
  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i += 1) {
    const charIndex = alphabets.indexOf(strArr[i].toLowerCase());
    let replacement = cypher[charIndex];
    if (isUpper(strArr[i])) {
      replacement = replacement.toUpperCase();
    }
    encryption += replacement || strArr[i];
  }

  return encryption;
};

export default caesarCipher;
