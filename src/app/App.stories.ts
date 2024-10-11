import type { Meta, StoryObj } from '@storybook/react';

import App from './App';

const meta: Meta<typeof App> = {
  title: 'Components/Layout',
  component: App,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {};
