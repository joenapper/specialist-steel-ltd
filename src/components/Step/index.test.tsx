import { render } from "@testing-library/react";
import Step from "./";

describe("Step", () => {
  it("renders a Step component", () => {
    const { container } = render(<Step number={1} text="Text" />);

    const step = container.querySelector("div");
    expect(step).toBeVisible();
  });
});

describe("props", () => {
  it("renders a number", () => {
    const { container } = render(<Step number={1} text="Text" />);

    const step = container.querySelector("div");
    expect(step).toHaveTextContent("1");
  });

  it("renders text", () => {
    const { container } = render(<Step number={1} text="Text" />);

    const step = container.querySelector("div");
    expect(step).toHaveTextContent("Text");
  });
});
