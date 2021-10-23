import React from "react";
import Card from "../Card";
import { Wrapper, Title, CardContainer } from "./styles";

const cards = [
  {
    id: 1,
    image: "/quality-work.jpg",
    imageAlt: "Quality work icon",
    title: "Quality work",
    text: "Our goal is to strive for perfection in all we do",
  },
  {
    id: 2,
    image: "/ce.jpg",
    imageAlt: "CE logo",
    title: "Accredited Company",
    text: "BS EN 1090 and ISO 9001 accredited",
  },
  {
    id: 3,
    image: "/experienced-team.jpg",
    imageAlt: "Experienced team icon",
    title: "Experienced Team",
    text: "Highly skilled workforce with a wealth of experience",
  },
];

const WhySection: React.FC = () => {
  return (
    <Wrapper>
      <Title>Why Us?</Title>
      <CardContainer>
        {cards.map(({ id, image, imageAlt, title, text }) => (
          <Card
            key={id}
            image={image}
            imageAlt={imageAlt}
            title={title}
            text={text}
          />
        ))}
      </CardContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo quo
        accusantium, natus nostrum ipsa maiores atque autem dicta excepturi,
        amet aperiam magni. Atque libero tenetur molestias dolore nihil earum.
      </p>
    </Wrapper>
  );
};

export default WhySection;
