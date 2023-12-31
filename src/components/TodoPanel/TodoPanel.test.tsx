import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TodoPanel } from './TodoPanel';

describe('Form', () => {
  it('input event', async () => {
    render(<TodoPanel addTodo={function ({ name }: Omit<Todo, 'id' | 'checked'>): void {}} />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    expect(screen.queryByTestId('value-test')).toContainHTML('');
    await userEvent.type(input, 'Тест');
    expect(screen.queryByTestId('value-test')).toContainHTML('Тест');
  }),
    it('keyDown event', () => {
      render(<TodoPanel addTodo={function ({ name }: Omit<Todo, 'id' | 'checked'>): void {}} />);
      const button = screen.queryByTestId('value-test') as Element;
      expect(screen.queryByTestId('submit'));
      fireEvent.keyPress(button);
      expect(screen.queryByTestId('value-test'));
    });
});
