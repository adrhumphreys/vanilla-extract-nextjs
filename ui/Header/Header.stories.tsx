import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    { title: "Our approach", href: "/our-approach" },
    { title: "Solutions", href: "/solutions" },
    { title: "About us", href: "/about-us" },
  ],
};
Primary.storyName = "Header";
