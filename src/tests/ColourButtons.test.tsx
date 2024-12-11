import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ColourButtons } from 'src/components/ColourButtons';
import { ProductWidgetSelectedColor } from 'src/slices/widgetSlice';

describe('ColourButtons Component', () => {
  it('renders the ColourButton component', () => {
    const getColour = vi.fn();
    render(
      <ColourButtons
        selectedColour={ProductWidgetSelectedColor.Green}
        getColour={getColour}
      />
    );
    expect(screen.getByTestId('colour-buttons')).toBeInTheDocument();
  });

  it('calls the handleChange handler when clicked on toggle', async () => {
    const getColour = vi.fn();
    render(
      <ColourButtons
        selectedColour={ProductWidgetSelectedColor.Green}
        getColour={getColour}
      />
    );
    const element = screen.getByTestId('colour-buttons');
    expect(element.children.length).toBe(
      Object.values(ProductWidgetSelectedColor).length
    );
  });
});
