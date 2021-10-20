import { render } from "@testing-library/react";
import Header from "./";

describe("Header", () => {
  it("renders a Header", () => {
    const { container } = render(<Header logo="/logo.png">Children</Header>);

    const header = container.querySelector("header");
    expect(header).toBeVisible();
  });
});

describe("props", () => {
  it("renders a logo", () => {
    const { container } = render(<Header logo="/logo.png">Children</Header>);

    const logo = container.querySelector("img");
    expect(logo.src).toContain("/logo.png");
  });

  it("renders children passed to Header", () => {
    const { container } = render(<Header logo="/logo.png">Children</Header>);

    const header = container.querySelector("header");
    expect(header).toHaveTextContent("Children");
  });
});
