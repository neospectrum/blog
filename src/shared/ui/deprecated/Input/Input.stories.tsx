import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: 'value...',
};

export const Secondary = Template.bind({});
Secondary.args = {};
