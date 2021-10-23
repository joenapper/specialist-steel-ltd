import React from "react";
import { Wrapper, Title, StepContainer } from "./styles";

import Step from "../Step";

const steps = [
  {
    number: 1,
    text: "Quotation",
  },
  {
    number: 2,
    text: "Material Preparation",
  },
  {
    number: 3,
    text: "Fabrication",
  },
  {
    number: 4,
    text: "Welding",
  },
  {
    number: 5,
    text: "Quality Control",
  },
  {
    number: 6,
    text: "Dispatch",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>The Process</Title>
      <StepContainer>
        {steps.map(({ number, text }) => (
          <Step key={number} number={number} text={text} />
        ))}
      </StepContainer>
    </Wrapper>
  );
};

export default ProcessSection;
