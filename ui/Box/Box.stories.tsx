import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box';
import * as styles from './Box.stories.css';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Content',
  className: styles.background,
  padding: { xs: 8, md: 24 },
};
