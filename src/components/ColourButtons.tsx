import { ProductWidgetSelectedColor } from 'src/slices/widgetSlice';
import { getColourClasses } from 'src/utils';

const COLOURS = Object.values(ProductWidgetSelectedColor);

interface Props {
  selectedColour: ProductWidgetSelectedColor;
  getColour: (colour: ProductWidgetSelectedColor) => void;
}

export const ColourButtons = (props: Props) => {
  const { selectedColour, getColour } = props;

  return (
    <div className="flex gap-2">
      {COLOURS.map((colour) => (
        <button
          key={colour}
          onClick={() => getColour(colour)}
          className={`h-8 w-8 hover:opacity-80 bg-${getColourClasses(colour)}${selectedColour === colour ? ' border-darkgray border-4' : ''}`}
        ></button>
      ))}
    </div>
  );
};
