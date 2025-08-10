declare module "@types" {
  export interface Colors {
    background: ColorScheme;
    foreground: ColorScheme;
    red: ColorScheme;
    primary: ColorScheme;
    primaryBackground: ColorScheme;
    secondary: ColorScheme;
    kakao: ColorScheme;
    google: ColorScheme;
    naver: ColorScheme;
    apple: ColorScheme;
  }

  export interface Breakpoints {
    mobile: `${number}px`;
    tablet: `${number}px`;
    desktop: `${number}px`;
  }

  export interface ColorScheme {
    normal: `#${string}`;
    light: `#${string}`;
    dark: `#${string}`;
  }
}
