import React from "react";
import { Wrapper, CircleWrapper, Circle } from "./styles";

interface StepProps {
  number: number;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, text }) => {
  return (
    <Wrapper>
      <CircleWrapper>
        <Circle>
          <p>{number}</p>
        </Circle>
      </CircleWrapper>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Step;
