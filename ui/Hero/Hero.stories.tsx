import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "./Hero";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Kia ora",
  content:
    "Introducing Foodstuffs Precision Media. We're creating New Zealand’s largest omnichannel retail media network, powered by dunnhumby data science.",
  imageUrl:
    "https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/hero-homepage-2.jpg",
};
Primary.storyName = "Hero";
