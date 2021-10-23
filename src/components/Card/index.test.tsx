import { render } from "@testing-library/react";
import Card from "./";

describe("Card", () => {
  it("renders a Card component", () => {
    const { container } = render(
      <Card image="ce.jpg" imageAlt="ce marking" title="title" text="text" />
    );

    const card = container.querySelector("div");
    expect(card).toBeVisible();
  });
});

describe("props", () => {
  it("renders a title", () => {
    const { container } = render(
      <Card image="ce.jpg" imageAlt="ce marking" title="title" text="text" />
    );

    const card = container.querySelector("div");
    expect(card).toHaveTextContent("title");
  });

  it("renders text", () => {
    const { container } = render(
      <Card image="ce.jpg" imageAlt="ce marking" title="title" text="text" />
    );

    const card = container.querySelector("div");
    expect(card).toHaveTextContent("text");
  });
});
