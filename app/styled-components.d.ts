import type { CSSProp } from "styled-components";

interface Colors {
  lightGrey: string;
  grey: string;
  darkGrey: string;
  white: string;
  black: string;
  red: string;
  primary: string;
  primaryBg: string;
  primaryLight: string;

  kakao: string;
  google: string;
  naver: string;
  apple: string;
}

interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    breakpoints: Breakpoints;
    fontFamily: string;
  }
}

declare module "react" {
  interface DOMAttributes {
    css?: CSSProp;
  }
}
