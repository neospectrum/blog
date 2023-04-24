import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis quae dolore iste dolorum perspiciatis labore in aliquam qui repudiandae.',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis quae dolore iste dolorum perspiciatis labore in aliquam qui repudiandae.',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis quae dolore iste dolorum perspiciatis labore in aliquam qui repudiandae.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
