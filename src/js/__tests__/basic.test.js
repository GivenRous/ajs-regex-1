import Validator from "../app";

test("Валидация пройдена", () => {
  const validator = new Validator();
  const received = validator.validateUsername("IVAN");
  expect(received).toBe(true);
});

test("Валидация пройдена", () => {
  const validator = new Validator();
  const received = validator.validateUsername("VANYA");
  expect(received).toBe(true);
});

test("Валидация не пройдена", () => {
  const validator = new Validator();
  const received = validator.validateUsername("@123)");
  expect(received).toBe(false);
});

test("Начинается с цифры", () => {
  const validator = new Validator();
  const received = validator.validateUsername("123IVAN");
  expect(received).toBe(false);
});

test("Заканчивается цифрой", () => {
  const validator = new Validator();
  const received = validator.validateUsername("IVAN123");
  expect(received).toBe(false);
});

test("Не более трех цифр подряд", () => {
  const validator = new Validator();
  const received = validator.validateUsername("O1-11-1O");
  expect(received).toBe(true);
});

test("Более трех цифр подряд", () => {
  const validator = new Validator();
  const received = validator.validateUsername("O111-1O");
  expect(received).toBe(true);
});

test("Кириллица", () => {
  const validator = new Validator();
  const received = validator.validateUsername("ИВАН");
  expect(received).toBe(false);
});

test("Начинается с тире", () => {
  const validator = new Validator();
  const received = validator.validateUsername("-IVAN");
  expect(received).toBe(false);
});

test("Заканчивается подчеркиванием", () => {
  const validator = new Validator();
  const received = validator.validateUsername("IVAN_");
  expect(received).toBe(false);
});
