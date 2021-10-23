import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WhySection from "./";

export default {
  title: "Components/Why Section",
  component: WhySection,
} as ComponentMeta<typeof WhySection>;

export const Primary: ComponentStory<typeof WhySection> = () => <WhySection />;
