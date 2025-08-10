import type { Colors } from "@types";
import type { DefaultTheme } from "styled-components";

const colors: Colors = {
  background: { normal: "#f8f8f8", light: "#e7e7e7", dark: "#c6c6c6" },
  foreground: { normal: "#2e2e2e", light: "#6d6d6d", dark: "#202020" },
  secondary: { normal: "#747474", light: "#9e9e9e", dark: "#515151" },
  red: { normal: "#f64f4f", light: "#f98484", dark: "#ac3737" },
  primary: { normal: "#0077b6", light: "#4da0cc", dark: "#00537f" },
  primaryBackground: { normal: "#d5f1ff", light: "#e2f5ff", dark: "#95a9b3" },
  kakao: { normal: "#fee600", light: "#feee4d", dark: "#b2a100" },
  google: { normal: "#4286f5", light: "#7baaf8", dark: "#2e5eac" },
  naver: { normal: "#21c607", light: "#64d751", dark: "#178b05" },
  apple: { normal: "#000000", light: "#4d4d4d", dark: "#8c8c8c" },
};

const breakpoints: DefaultTheme["breakpoints"] = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const fontFamily: DefaultTheme["fontFamily"] = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Apple SD Gothic Neo",
  "Pretendard Variable",
  "Pretendard",
  "Roboto",
  "Noto Sans KR",
  "Segoe UI",
  "Malgun Gothic",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "sans-serif",
].join(", ");

const theme: DefaultTheme = {
  colors,
  breakpoints,
  fontFamily,
};

export default theme;
