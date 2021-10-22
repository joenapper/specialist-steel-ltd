import { render } from "@testing-library/react";
import Hero from "./";

describe("Hero", () => {
  it("renders a Hero", () => {
    const { container } = render(
      <Hero
        title="title"
        image="/image.png"
        imageAlt="alt"
        imageHeight={529}
        imageWidth={1000}
      />
    );

    const hero = container.querySelector("section");
    expect(hero).toBeVisible();
  });
});

describe("props", () => {
  it("renders a title", () => {
    const { container } = render(
      <Hero
        title="title"
        image="/image.png"
        imageAlt="alt"
        imageHeight={529}
        imageWidth={1000}
      />
    );

    const hero = container.querySelector("section");
    expect(hero).toHaveTextContent("title");
  });
});
