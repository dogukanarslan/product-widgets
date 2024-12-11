import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { fn } from '@storybook/test';

import { ColourButtons } from 'src/components/ColourButtons';
import { ProductWidgetSelectedColor } from 'src/slices/widgetSlice';

type StoryProps = ComponentProps<typeof ColourButtons>;

const meta: Meta<StoryProps> = {
  component: ColourButtons,
  tags: ['autodocs'],
  argTypes: {
    selectedColour: {
      options: [
        ProductWidgetSelectedColor.Beige,
        ProductWidgetSelectedColor.Black,
        ProductWidgetSelectedColor.Blue,
        ProductWidgetSelectedColor.Green,
        ProductWidgetSelectedColor.White,
      ],
    },
  },
  args: {
    getColour: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Beige: Story = {
  args: {
    selectedColour: ProductWidgetSelectedColor.Beige,
  },
  render: (args) => {
    return <ColourButtons {...args} />;
  },
};

export const Black: Story = {
  args: {
    selectedColour: ProductWidgetSelectedColor.Black,
  },
  render: (args) => {
    return <ColourButtons {...args} />;
  },
};

export const Blue: Story = {
  args: {
    selectedColour: ProductWidgetSelectedColor.Blue,
  },
  render: (args) => {
    return <ColourButtons {...args} />;
  },
};

export const Green: Story = {
  args: {
    selectedColour: ProductWidgetSelectedColor.Green,
  },
  render: (args) => {
    return <ColourButtons {...args} />;
  },
};

export const White: Story = {
  args: {
    selectedColour: ProductWidgetSelectedColor.White,
  },
  render: (args) => {
    return <ColourButtons {...args} />;
  },
};
