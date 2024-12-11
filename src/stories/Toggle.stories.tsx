import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { fn } from '@storybook/test';

import { Toggle } from 'src/components/Toggle';

type StoryProps = ComponentProps<typeof Toggle>;

const meta: Meta<StoryProps> = {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      options: [true, false],
    },
  },
  args: {
    handleChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const CheckedToggle: Story = {
  args: {
    isChecked: true,
  },
  render: (args) => {
    return <Toggle {...args} />;
  },
};

export const UncheckedToggle: Story = {
  args: {
    isChecked: false,
  },
  render: (args) => {
    return <Toggle {...args} />;
  },
};
