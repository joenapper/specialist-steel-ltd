import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Circle = styled.div`
  position: relative;
  background-color: #312f43;
  color: #ffffff;
  padding: 2rem;
  border-radius: 50%;

  p {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;
