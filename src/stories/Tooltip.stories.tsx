import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Tooltip } from 'src/components/Tooltip';
type StoryProps = ComponentProps<typeof Tooltip>;

const meta: Meta<StoryProps> = {
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const TooltipButton: Story = {
  args: {
    message: 'Tooltip message!',
    children: (
      <button className="rounded bg-blue px-4 py-2 text-white">Hover over me!</button>
    ),
  },
  render: ({ ...args }) => {
    return <Tooltip {...args}></Tooltip>;
  },
};
