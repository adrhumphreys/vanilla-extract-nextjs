import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RichContentBlock from "./RichContentBlock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/RichContentBlock",
  component: RichContentBlock,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof RichContentBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RichContentBlock> = (args) => (
  <RichContentBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  heading:
    "Take advantage of world-leading data-science, enabling brands to understand, target and engage their customers like never before.",
  content:
    "Retail is changing, as are Customers’ needs and expectations. We ensure that we can precisely connect with customers from sofa to store so that they can interact with your brand in a personalised and effective way.",
  video: {
    title: "Introducing Foodstuffs Precision Media",
    url: "https://www.youtube.com/watch?v=8D7xR3JB6mg",
  },
};
Primary.storyName = "Rich content block";
