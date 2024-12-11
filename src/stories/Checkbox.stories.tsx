import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { fn } from '@storybook/test';

import { Checkbox } from 'src/components/Checkbox';

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
  component: Checkbox,
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

export const Checked: Story = {
  args: {
    isChecked: true,
  },
  render: (args) => {
    return <Checkbox {...args} />;
  },
};

export const UnChecked: Story = {
  args: {
    isChecked: false,
  },
  render: (args) => {
    return <Checkbox {...args} />;
  },
};
