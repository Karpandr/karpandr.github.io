
import type { Meta, StoryObj } from '@storybook/react';
import BasketProduct from './index'; // Ensure this path is correct

const meta: Meta<typeof BasketProduct> = {
  title: 'Components/BasketProduct',
  component: BasketProduct,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BasketProduct>;

export const Default: Story = {};