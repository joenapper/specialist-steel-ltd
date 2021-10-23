import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "./";

export default {
  title: "Components/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

export const White: ComponentStory<typeof Container> = () => {
  return (
    <Container>
      <h1>This is an example of the Container component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        fugiat? Modi corporis iure amet totam commodi dolore eius, sapiente
        minima consequatur possimus non ducimus veritatis aliquid doloremque
        voluptates minus culpa earum, nemo recusandae dicta laudantium ullam.
        Laudantium omnis aut hic nesciunt sed ratione, perspiciatis, accusamus
        dicta harum facere non! Vitae?
      </p>
    </Container>
  );
};

export const Dark: ComponentStory<typeof Container> = () => {
  return (
    <Container backgroundColor="black" color="white">
      <h1>This is an example of the Container component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        fugiat? Modi corporis iure amet totam commodi dolore eius, sapiente
        minima consequatur possimus non ducimus veritatis aliquid doloremque
        voluptates minus culpa earum, nemo recusandae dicta laudantium ullam.
        Laudantium omnis aut hic nesciunt sed ratione, perspiciatis, accusamus
        dicta harum facere non! Vitae?
      </p>
    </Container>
  );
};
