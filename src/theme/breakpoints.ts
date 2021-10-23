interface Breakpoint {
  breakpoint: number;
}

export interface Breakpoints {
  [key: string]: Breakpoint;
}

const breakpoints: Breakpoints = {
  mobile: {
    breakpoint: 0,
  },
  mobileLarge: {
    breakpoint: 480,
  },
  tablet: {
    breakpoint: 768,
  },
  desktop: {
    breakpoint: 1024,
  },
  desktopLarge: {
    breakpoint: 1440,
  },
} as const;

export default breakpoints;
