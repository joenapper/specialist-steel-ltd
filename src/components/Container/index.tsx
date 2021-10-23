import { Wrapper, Content } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor,
  color,
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor} color={color}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Container;
