import {
  arrayAnalyzer,
  cesarSepher,
  capitalize,
  reverseString,
  calculator,
} from "./module";
test("should cputalize the first letter of nabil", () => {
  expect(capitalize("nabil")).toBe("Nabil");
});
test("should caputalize random string", () => {
  expect(capitalize("one")).toBe("One");
});
test("should reverse string nabil", () => {
  expect(reverseString("nabil")).toBe("liban");
});
test("should reverse any string ", () => {
  expect(reverseString("nabi")).toBe("iban");
});
test("should add twon number", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
test("should divide twon number", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test("should crypt abc to def", () => {
  expect(cesarSepher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("should return object", () => {
  expect(arrayAnalyzer([1, 8, 3, 4, 2, 6])).toBeInstanceOf(Object);
});
test("Objest should contains averrage prop", () => {
  expect(Object.keys(arrayAnalyzer([1, 8, 3, 4, 2, 6]))).toContain("averrage");
});
test(" should Calculate averrage", () => {
  expect(arrayAnalyzer([1, 8, 3, 4, 2, 6])).toEqual({
    averrage: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
