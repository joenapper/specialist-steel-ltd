import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Step from "./";

export default {
  title: "Components/Step",
  component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = (args) => <Step {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
  text: "Text",
};
