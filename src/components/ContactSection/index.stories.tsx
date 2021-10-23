import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactSection from "./";

export default {
  title: "Components/Contact Section",
  component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

export const Primary: ComponentStory<typeof ContactSection> = () => (
  <ContactSection />
);
