import { render } from "@testing-library/react";
import Container from ".";

describe("Container", () => {
  it("renders a Container component", () => {
    const { container } = render(<Container>Children</Container>);

    const component = container.querySelector("section");
    expect(component).toBeVisible();
  });
});

describe("props", () => {
  it("renders children", () => {
    const { container } = render(<Container>Children</Container>);

    const component = container.querySelector("section");
    expect(component).toHaveTextContent("Children");
  });
});
