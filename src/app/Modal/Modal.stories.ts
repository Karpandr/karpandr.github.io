import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        visible: { control: 'boolean' },
        onClose: { action: 'closed' },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        visible: true,
        children: React.createElement('div', null, 'This is a modal content'),
        onClose: () => { },
    },
};

export const Hidden: Story = {
    args: {
        visible: false,
        children: React.createElement('div', null, 'This is a modal content'),
        onClose: () => { },
    },
};