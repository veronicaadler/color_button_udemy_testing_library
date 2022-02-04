import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test ('button has correct initial text', () => {

});

test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: /change to red/i })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})
