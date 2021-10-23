import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutSection from "./";

export default {
  title: "Components/About Section",
  component: AboutSection,
} as ComponentMeta<typeof AboutSection>;

export const Primary: ComponentStory<typeof AboutSection> = () => (
  <AboutSection />
);
