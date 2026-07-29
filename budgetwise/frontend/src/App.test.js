import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the BudgetWise authentication screen', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /budgetwise/i })).toBeInTheDocument();
});
