// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//test phone number
test('abc is not phone number', () => {
    expect(functions.isPhoneNumber("abc")).toBe(false);
  });

test('???? is not phone number', () => {
  expect(functions.isPhoneNumber("????")).toBe(false);
});

test('123-999-1193 is phone number', () => {
  expect(functions.isPhoneNumber("123-999-1193")).toBe(true);
  });

test('000-999-0000 is phone number', () => {
  expect(functions.isPhoneNumber("000-999-0000")).toBe(true);
  });

//test email
test('asdfs.com is not email', () => {
    expect(functions.isEmail("asdfs.com")).toBe(false);
  });

test('asdf@ is not email', () => {
  expect(functions.isEmail("asdf@")).toBe(false);
});

test('123@aa.com is email', () => {
  expect(functions.isEmail("123@aa.com")).toBe(true);
  });

test('aaaa@aa.aa is email', () => {
  expect(functions.isEmail("aaaa@aa.aa")).toBe(true);
  });


//test strong password
test('123456 is not strong password', () => {
    expect(functions.isStrongPassword("123456")).toBe(false);
  });

test('a1 is not strong password', () => {
  expect(functions.isStrongPassword("a1")).toBe(false);
});

test('abc1231241234 is strong password', () => {
  expect(functions.isStrongPassword("abc1231241234")).toBe(true);
  });

test('asdf3423gsdgs is strong password', () => {
  expect(functions.isStrongPassword("asdf3423gsdgs")).toBe(true);
  });

//test date
test('1212 is not date', () => {
    expect(functions.isDate("1212")).toBe(false);
  });

test('0/1 is not date', () => {
  expect(functions.isDate("0/1")).toBe(false);
});

test('11/11/1234 is date', () => {
  expect(functions.isDate("11/11/1234")).toBe(true);
  });

test('1/1/1111 is date', () => {
  expect(functions.isDate("1/1/1111")).toBe(true);
  });

//test isHexColor
test('abcz is not Hex Color', () => {
    expect(functions.isHexColor("abcz")).toBe(false);
  });

test('kk1 is not Hex Color', () => {
  expect(functions.isHexColor("kk1")).toBe(false);
});

test('ad4 is Hex Color', () => {
  expect(functions.isHexColor("ad4")).toBe(true);
  });

test('b31f12 is Hex Color', () => {
  expect(functions.isHexColor("b31f12")).toBe(true);
  });