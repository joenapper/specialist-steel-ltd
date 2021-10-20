import { render } from "@testing-library/react";
import CallToAction from "./";

describe("CallToAction", () => {
  it("renders a CallToAction component", () => {
    const { container } = render(<CallToAction href="/" label="button" />);

    const cta = container.querySelector("a");
    expect(cta).toBeVisible();
  });
});

describe("props", () => {
  it("renders a label passed to CallToAction", () => {
    const { container } = render(<CallToAction href="/" label="button" />);

    const cta = container.querySelector("a");
    expect(cta).toHaveTextContent("button");
  });
});
