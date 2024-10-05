import caesarCipher from "./caesarCipher.js";

test("encrypt xyz by 3 should return abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("encrypt uvw by 3 should return xyz", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("encrypt abc by 4 should return efg", () => {
  expect(caesarCipher("abc", 4)).toBe("efg");
});

test("encrypt wxy by 3 should return zab", () => {
  expect(caesarCipher("wxy", 3)).toBe("zab");
});

test("encrypt wxy by 3 should return zab", () => {
  expect(caesarCipher("wxy", 3)).toBe("zab");
});

test("encrypt HeLLo by 3 should return KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("encrypt Hello World! by 3 should return Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
