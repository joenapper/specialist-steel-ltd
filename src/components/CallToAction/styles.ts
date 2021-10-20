import styled from "styled-components";

export const Wrapper = styled.a`
  &.storybook-button {
    border: 2px solid #fe9e00;
    cursor: pointer;
    display: inline-block;
  }

  &.storybook-button--primary {
    background-color: #fe9e00;

    &:hover {
      background-color: transparent;
    }
  }

  &.storybook-button--secondary {
    background-color: transparent;

    &:hover {
      background-color: #fe9e00;
    }
  }

  &.storybook-button--small {
    font-size: 0.75rem;
    padding: 0.5rem 1.75rem;
  }

  &.storybook-button--medium {
    font-size: 1rem;
    padding: 0.75rem 2rem;
  }

  &.storybook-button--large {
    font-size: 1rem;
    padding: 1rem 2.25rem;
  }
`;
