import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "./";

export default {
  title: "Components/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, vero?",
  image: "/hero.png",
  imageAlt: "An outline of a person welding",
  imageHeight: 529,
  imageWidth: 1000,
};
