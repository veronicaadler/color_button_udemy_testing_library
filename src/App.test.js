import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color and text and changes when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton).toHaveTextContent(/change to red/i)
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  //check that button is enabled
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();

})

test('whether the checkbox is disabled upon clicking', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', {name: /disable button/i})
  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });
  const colorButton = screen.getByRole('button', {
    name: /change to blue/i
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });
  const colorButton = screen.getByRole('button', {
    name: /change to blue/i,
  });

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})

