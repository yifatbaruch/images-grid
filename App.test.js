import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('renders Refresh button', async () => {
  render(<App />);
  expect(await screen.findByText(/Refresh/)).toBeInTheDocument();
});

test('renders images button', async () => {
  render(<App />);
  const items = await screen.findAllByRole(/img/);
  expect(items).toHaveLength(5);
});

test('renders display button', async () => {
  render(<App />);
  expect(await screen.findByText(/⸬/)).toBeInTheDocument();
  expect(await screen.findByText(/⁞/)).toBeInTheDocument();
});

test('press refresh button', async () => {
  render(<App />);
  const refreshButton = await screen.findByText(/Refresh/);
  const itemsBeforeRefreshing = await screen.findAllByRole(/img/);
  fireEvent.click(refreshButton);
  const itemsAfterRefreshing = await screen.findAllByRole(/img/);
  expect(itemsBeforeRefreshing).not.toBe(itemsAfterRefreshing);
});
