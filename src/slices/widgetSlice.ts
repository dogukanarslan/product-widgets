import { createSlice } from '@reduxjs/toolkit';

enum ProductWidgetType {
  Carbon = 'carbon',
  PlasticBottles = 'plastic bottles',
  Trees = 'trees',
}

enum ProductWidgetAction {
  Collects = 'collects',
  Plants = 'plants',
  Offsets = 'offsets',
}

enum ProductWidgetSelectedColor {
  White = 'white',
  Black = 'black',
  Blue = 'blue',
  Green = 'green',
  Beige = 'beige',
}

interface ProductWidget {
  id: number;
  type: ProductWidgetType;
  amount: number;
  action: ProductWidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: ProductWidgetSelectedColor;
}

export interface WidgetState {
  data: ProductWidget[];
}

const initialState: WidgetState = {
  data: [],
};

export const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {},
});

export default widgetSlice.reducer;
