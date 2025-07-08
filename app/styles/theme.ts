import type { DefaultTheme } from "styled-components";

type CommonColors = Pick<
  DefaultTheme["colors"],
  "kakao" | "google" | "naver" | "apple"
>;
type VariableColors = Omit<DefaultTheme["colors"], keyof CommonColors>;

const lightColors: VariableColors = {
  lightGrey: "#F2F2F2",
  grey: "#B2B2B2",
  darkGrey: "#747474",
  white: "#FFFFFF",
  black: "#000000",
  red: "#F64F4F",
  primary: "#0077B6",
  primaryBg: "#D5F1FF",
  primaryLight: "#D2F2F9",
};

const commonColors: CommonColors = {
  kakao: "#FEE600",
  google: "#4286F5",
  naver: "#21C607",
  apple: "#000000",
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

const theme = {
  colors: { ...commonColors, ...lightColors },
  breakpoints,
  fontFamily,
};

export default theme;
