import { ComponentMeta, ComponentStory } from "@storybook/react";
import Accordian from "./Accordian";

export default {
  title: "Components/Accordian",
  component: Accordian,
} as ComponentMeta<typeof Accordian>;

const Template: ComponentStory<typeof Accordian> = (args) => (
  <Accordian {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  title: "Item Title",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nisi quis sollicitudin porta.",
};
