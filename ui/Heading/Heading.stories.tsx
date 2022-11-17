import { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';
import { FontSize, fontSizes } from './Heading.css';

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  size: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'The wizard quickly jinxed the gnomes before they vaporized',
  size: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'The wizard quickly jinxed the gnomes before they vaporized',
  size: 'h3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: 'The five boxing wizards jump quickly',
  size: 'h4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  children: 'Quick fox jumps nightly above wizard',
  size: 'h5',
};

export const AllSizes = (args: { children: ReactNode }) => {
  return Object.keys(fontSizes).map((size) => {
    return (
      <Heading key={`${size}`} size={size as FontSize}>
        {args.children
          ? args.children
          : `The quick brown fox jumps over the lazy dog (${size})`}
      </Heading>
    );
  });
};
AllSizes.args = {
  children: '',
};
