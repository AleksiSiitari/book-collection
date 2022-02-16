import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Book Collection/i);
  expect(headingElement).toBeInTheDocument();
});
