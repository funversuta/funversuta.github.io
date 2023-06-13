import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

describe('renders App', () => {
  it('renders title', () => {
    render(<App />);
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  }),
    it('renders list', () => {
      render(<App />);
      expect(screen.getByText(/Тестовое/i)).toBeInTheDocument();
      expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
      expect(screen.getByText(/Покрытие тестами/i)).toBeInTheDocument();
    }),
    it('renders button', () => {
      render(<App />);
      expect(screen.getByText(/all/i)).toBeInTheDocument();
      expect(screen.getByText(/active/i)).toBeInTheDocument();
    });
});
