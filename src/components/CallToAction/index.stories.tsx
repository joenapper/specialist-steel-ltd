import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CallToAction from "./";

export default {
  title: "Components/CallToAction",
  component: CallToAction,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CallToAction>;

const Template: ComponentStory<typeof CallToAction> = (args) => (
  <CallToAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: "/",
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: "/",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  href: "/",
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  href: "/",
  size: "small",
  label: "Button",
};
