import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProcessSection from "./";

export default {
  title: "Components/Process Section",
  component: ProcessSection,
} as ComponentMeta<typeof ProcessSection>;

export const Primary: ComponentStory<typeof ProcessSection> = () => (
  <ProcessSection />
);
