import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageBlock from "./ImageBlock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ImageBlock",
  component: ImageBlock,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ImageBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageBlock> = (args) => (
  <ImageBlock {...args} />
);

export const Left = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Left.args = {
  heading: "Greater campaign effectiveness and return",
  content:
    "Reduce media wastage by targeting the most relevant customers online and in store to achieve your brand objectives. Insights and measurement underpin our full-service approach.",
  imageUrl:
    "https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/Content-and-promo-images/Helping-customer-650x430.jpg?h=430&iar=0&w=650",
  position: "LEFT",
  theme: "PURPLE",
};

export const LeftCallToAction = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftCallToAction.args = {
  heading: "Greater campaign effectiveness and return",
  content:
    "Reduce media wastage by targeting the most relevant customers online and in store to achieve your brand objectives. Insights and measurement underpin our full-service approach.",
  imageUrl:
    "https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/Content-and-promo-images/Helping-customer-650x430.jpg?h=430&iar=0&w=650",
  position: "LEFT",
  theme: "PURPLE",
  callToAction: {
    location: "/home",
    title: "Our approach",
  },
};

export const Right = Template.bind({});
Right.args = {
  heading: "Seamless multi-channel delivery",
  content:
    "Our client-focused team of media experts ensure consistent campaign delivery across the New World and PAK’nSAVE media portfolio.",
  imageUrl:
    "https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/Content-and-promo-images/HR-Man-using-Cellphone-AdobeStock_315539172-650x480.jpg?h=480&iar=0&w=650",
  position: "RIGHT",
  theme: "WHITE",
};
