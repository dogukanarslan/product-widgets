import { ProductWidgetSelectedColor } from 'src/slices/widgetSlice';

export const getColourClasses = (colour: ProductWidgetSelectedColor) => {
  let colourClasses = '';
  if (colour === ProductWidgetSelectedColor.Green) {
    colourClasses = ' bg-green text-white';
  } else if (colour === ProductWidgetSelectedColor.Beige) {
    colourClasses = ' bg-beige text-green';
  } else if (colour === ProductWidgetSelectedColor.Black) {
    colourClasses = ' bg-black text-white';
  } else if (colour === ProductWidgetSelectedColor.Blue) {
    colourClasses = ' bg-blue text-white';
  } else if (colour === ProductWidgetSelectedColor.White) {
    colourClasses = ' bg-white text-black';
  }

  return colourClasses;
};
