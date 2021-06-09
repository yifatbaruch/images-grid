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
  expect(itemsBeforeRefreshing).toHaveLength(5);
  fireEvent.click(refreshButton);
  const itemsAfterRefreshing = await screen.findAllByRole(/img/);
  expect(itemsAfterRefreshing).toHaveLength(5);
  expect(itemsBeforeRefreshing).not.toBe(itemsAfterRefreshing);
});

test('press display buttons', async () => {
  render(<App />);
  const horizontalButton = await screen.findByText(/⸬/);
  const verticalButton = await screen.findByText(/⁞/);
  let imageContainer= await screen.findByTestId (/container/);
  expect(imageContainer.classList.contains("horizontalImages")).toBe(true);
  expect(imageContainer.classList.contains("verticalImages")).toBe(false);
  fireEvent.click(verticalButton);
  expect(imageContainer.classList.contains("horizontalImages")).toBe(false);
  expect(imageContainer.classList.contains("verticalImages")).toBe(true);
  fireEvent.click(horizontalButton);
  expect(imageContainer.classList.contains("horizontalImages")).toBe(true);
  expect(imageContainer.classList.contains("verticalImages")).toBe(false);
});
