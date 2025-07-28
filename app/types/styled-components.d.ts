import type { CSSProp } from "styled-components";
import type { Colors, Breakpoints } from "theme";

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
