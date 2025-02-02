import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'Уведомление',
        description: 'Вам пришло уведомление',
    },
};
