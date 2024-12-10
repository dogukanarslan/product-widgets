import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from 'src/constants';

export const fetchWidgets = createAsyncThunk(
  'widgets/fetchWidgets',
  async () => {
    const response = await fetch(`${BASE_URL}/product-widgets`);
    const widgets = response.json();

    return widgets;
  }
);

export enum ProductWidgetType {
  Carbon = 'carbon',
  PlasticBottles = 'plastic bottles',
  Trees = 'trees',
}

export enum ProductWidgetAction {
  Collects = 'collects',
  Plants = 'plants',
  Offsets = 'offsets',
}

export enum ProductWidgetSelectedColor {
  Blue = 'blue',
  Green = 'green',
  Beige = 'beige',
  White = 'white',
  Black = 'black',
}

export interface ProductWidget {
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
  reducers: {
    activateWidget(
      state,
      action: PayloadAction<{ widgetId: number; active: boolean }>
    ) {
      state.data = state.data.map((widget) => {
        if (widget.id === action.payload.widgetId) {
          return { ...widget, active: action.payload.active };
        }

        return { ...widget, active: false };
      });
    },
    linkProfile(state, action: PayloadAction<number>) {
      state.data = state.data.map((widget) => {
        if (widget.id === action.payload) {
          return { ...widget, linked: !widget.linked };
        }

        return widget;
      });
    },
    changeColour(
      state,
      action: PayloadAction<{
        widgetId: number;
        colour: ProductWidgetSelectedColor;
      }>
    ) {
      state.data = state.data.map((widget) => {
        if (widget.id === action.payload.widgetId) {
          return { ...widget, selectedColor: action.payload.colour };
        }

        return widget;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWidgets.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { activateWidget, linkProfile, changeColour } =
  widgetSlice.actions;

export default widgetSlice.reducer;
