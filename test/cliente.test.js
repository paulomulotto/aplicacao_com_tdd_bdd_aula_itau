const Cliente = require("../models/cliente")

test('Quando eu digitar um CPF para um cliente válido, deveria retornar true', () => {
  var cliente = new Cliente("Danilo", "64440783007")
  expect(cliente.validarCPF()).toBe(true);
});

test('Quando eu digitar um CPF para um cliente válido formatado, deveria retornar true', () => {
  var cliente = new Cliente("Danilo", "644.407.830-07")
  expect(cliente.validarCPF()).toBe(true);
});

test('Quando eu digitar um CPF não definido, deveria retornar false', () => {
  var cliente = new Cliente("Danilo", undefined)
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 00000000000 deveria retornar false', () => {
  var cliente = new Cliente("Danilo", "00000000000")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 000000000000 deveria retornar false', () => {
  var cliente = new Cliente("Danilo", "000000000000")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 0000000000 deveria retornar false', () => {
  var cliente = new Cliente("Danilo", "0000000000")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 11111111111 deveria retornar false', () => {
  var cliente = new Cliente("Danilo", "11111111111")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF para um cliente inválido, deveria retornar false', () => {
  var cliente = new Cliente("Danilo", "64440783001")
  expect(cliente.validarCPF()).toBe(false);
});