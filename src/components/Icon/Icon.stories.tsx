import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon, { IconProps, iconSizes } from '.';

const sizeOptions = Object.keys(iconSizes);

export default {
  title: 'Components/Icon',
  args: {},
  argTypes: {
    size: { control: 'select', options: sizeOptions },
    name: {
      control: 'select',
      options: [
        'arrowup',
        'articles',
        'clock_fill',
        'coffee',
        'default',
        'github',
        'home',
        'instagram',
        'jobs',
        'linkedin',
        'menu',
        'profile',
        'school',
        'search',
        'settings',
        'terminal',
        'tools',
        'twitter',
        'youtube',
      ],
    },
  },
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  size: 'md',
  name: 'default',
} as IconProps;
