import styled, { css } from "styled-components";
import mediaAbove from "../../utils/mediaAbove";

interface Props {
  backgroundColor?: string;
}

export const Wrapper = styled.section<Props>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 0.75rem 1.5rem;
  ${mediaAbove.tablet(css`
    padding: 1rem 2rem;
  `)}
  ${mediaAbove.desktopLarge(css`
    padding: 1.25rem 2.5rem;
  `)}
`;

export const Content = styled.div`
  margin: auto;
  ${mediaAbove.desktop(css`
    max-width: 960px;
  `)}
  ${mediaAbove.desktopLarge(css`
    max-width: 1700px;
  `)}
`;
