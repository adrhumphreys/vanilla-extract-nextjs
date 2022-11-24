import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    { title: "Our approach", href: "/our-approach" },
    { title: "Solutions", href: "/solutions" },
    { title: "About us", href: "/about-us" },
  ],
};
Primary.storyName = "Footer";
