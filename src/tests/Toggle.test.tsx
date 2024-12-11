import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from '../components/Toggle';

describe('Toggle Component', () => {
  it('renders the toggle', () => {
    const handleChange = vi.fn();
    render(<Toggle isChecked handleChange={handleChange} />);
    expect(screen.getByTestId('toggle')).toBeInTheDocument();
  });

  it('calls the handleChange handler when clicked on toggle', async () => {
    const handleChange = vi.fn();
    render(<Toggle isChecked handleChange={handleChange} />);
    const element = screen.getByTestId('toggle');
    await userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('test Toggle components checked attribute', async () => {
    const handleChange = vi.fn();
    render(<Toggle isChecked={true} handleChange={handleChange} />);
    const element = screen.getByTestId('toggle');
    expect(element).toBeChecked();
  });
});
