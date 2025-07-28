/**
 * 주어진 HEX 또는 RGB 색상 문자열이 어두운지 밝은지 판별합니다.
 *
 * @param colorStr - HEX (예: "#RRGGBB" 또는 "#RGB") 또는 RGB (예: "rgb(R, G, B)") 색상 문자열
 * @param threshold - 색상을 어둡거나 밝다고 판단하는 휘도 임계값 (기본값: 128)
 * @returns 색상이 어두우면 true, 밝으면 false를 반환합니다.
 */
export default function isColorDark(
  colorStr: string,
  threshold: number = 128
): boolean {
  let r: number, g: number, b: number;

  // 1. HEX 색상 파싱
  if (colorStr.startsWith("#")) {
    const hex = colorStr.slice(1);
    if (hex.length === 3) {
      // #RGB 형식
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      // #RRGGBB 형식
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      // 유효하지 않은 HEX 형식
      console.warn(`Invalid HEX color format: ${colorStr}`);
      return false; // 또는 에러를 던질 수 있습니다.
    }
  }
  // 2. RGB 색상 파싱
  else if (colorStr.startsWith("rgb")) {
    const match = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match && match.length === 4) {
      r = parseInt(match[1], 10);
      g = parseInt(match[2], 10);
      b = parseInt(match[3], 10);
    } else {
      // 유효하지 않은 RGB 형식
      console.warn(`Invalid RGB color format: ${colorStr}`);
      return false;
    }
  }
  // 3. 지원하지 않는 형식
  else {
    console.warn(`Unsupported color format: ${colorStr}`);
    return false;
  }

  // 휘도(Luminance) 계산
  // 표준 ITU-R BT.709 계산법을 사용합니다.
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luminance < threshold;
}
