import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: "/ce.jpg",
  imageAlt: "ce marking",
  title: "title",
  text: "text",
};
