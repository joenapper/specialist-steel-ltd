import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Wrapper, Title } from "./styles";

interface HeroProps {
  title: string;
  image: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  image,
  imageAlt,
  imageHeight,
  imageWidth,
}) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Title>{title}</Title>
      {/* Stops next/image src error throwing in Storybook */}
      {router === null ? (
        <img
          src={image}
          alt={imageAlt}
          height={imageHeight}
          width={imageWidth}
        />
      ) : (
        <Image
          src={image}
          alt={imageAlt}
          height={imageHeight}
          width={imageWidth}
        />
      )}
    </Wrapper>
  );
};

export default Hero;
