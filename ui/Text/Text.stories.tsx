import { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import { Sprinkles } from './Text.css';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    weight: 'base',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'Content',
  size: 'sm',
};

export const Base = Template.bind({});
Base.args = {
  children: 'Content',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Content',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Content',
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: 'Content',
  size: 'xl',
};

const fontSizes = ['sm', 'base', 'md', 'lg', 'xl'];
const fontWeights = ['base', 'medium', 'strong'];

export const AllSizes = (args: { children: ReactNode }) => {
  return Object.keys(fontSizes).map((size) => {
    return Object.keys(fontWeights).map((weight) => {
      return (
        <Text
          {...args}
          key={`${weight}-${size}`}
          weight={weight as Sprinkles['weight']}
          size={size as Sprinkles['size']}
        >
          {args.children
            ? args.children
            : `Font size ${size}, font weight ${weight}`}
        </Text>
      );
    });
  });
};
AllSizes.args = {
  children: '',
};
