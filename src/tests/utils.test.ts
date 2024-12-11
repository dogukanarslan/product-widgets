import { getColourClasses } from 'src/utils';
import { ProductWidgetSelectedColor } from 'src/slices/widgetSlice';

describe('util tests', () => {
  it('initializes with the correct value', () => {
    const result = getColourClasses(ProductWidgetSelectedColor.Beige);
    expect(result).toBe(' bg-beige text-green');
  });
});
