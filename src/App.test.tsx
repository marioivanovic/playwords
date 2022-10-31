import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { concatArrayValue, letterInWorl, nbre_caracteres } from './components/function';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('Nombre de fois que la lette A est répété dans ABACA', () => {
  const value = "ABACA";
  expect(nbre_caracteres("A", value)).toBe(3);
});

test('Verifie si la lette A est dans le mot ABACA', () => {
  const value = "ABACA";
  expect(letterInWorl("A", value)).toBe(true);
});

test('Verifie si la lette D n est pas dans le mot ABACA', () => {
  const value = "ABACA";
  expect(letterInWorl("D", value)).toBe(false);
});

test('Verifie si la concatenation', () => {
  const array = [
    { value: "J", color: "" },
    { value: "O", color: "" },
    { value: "U", color: "" },
    { value: "E", color: "" },
    { value: "R", color: "" },
  ];
  expect(concatArrayValue(array)).toBe("JOUER");
});

