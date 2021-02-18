import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders header with text', () => {
  render(<Header />);
  const text = screen.getByText(/Covid-19 Global vaccine Map/i);
  expect(text).toBeInTheDocument();
});
