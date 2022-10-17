import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about me page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Michael Wegter is a full stack developer/i);
  expect(linkElement).toBeInTheDocument();
});
