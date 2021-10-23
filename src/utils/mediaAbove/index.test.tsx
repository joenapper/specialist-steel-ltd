import breakpoints from "../../theme/breakpoints";

import mediaAbove from "./";

describe("mediaAbove", () => {
  it("returns formatted media query css", () => {
    const css = mediaAbove.tablet` display: none `
      .join("")
      .replace(/\n/gm, " ")
      .replace(/  +/g, " ")
      .trim();

    expect(css).toBe(
      `@media screen and (min-width:${breakpoints.tablet.breakpoint}px){ display: none }`
    );
  });
});
