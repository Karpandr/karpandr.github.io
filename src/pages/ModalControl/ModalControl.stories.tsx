import type { Meta, StoryObj } from '@storybook/react';
import ModalControl from './ModalControl';

const meta: Meta<typeof ModalControl> = {
  title: 'Components/ModalControl',
  component: ModalControl,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalControl>;

export const Default: Story = {};
