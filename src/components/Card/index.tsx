import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Wrapper } from "./styles";

interface CardProps {
  image: string;
  imageAlt: string;
  imageHeight?: number;
  imageWidth?: number;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({
  image,
  imageAlt,
  imageHeight = 100,
  imageWidth = 100,
  title,
  text,
}) => {
  const router = useRouter();
  return (
    <Wrapper>
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
      <h3>{title}</h3>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Card;
