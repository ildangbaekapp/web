import type { Colors } from "@types";
import { useTheme } from "styled-components";

import type { Palette } from "~/components/ui/Feedback";

function usePalette(colorKey: keyof Colors): Palette;
function usePalette(colorKey: (keyof Colors)[]): Palette[];

function usePalette(
  colorKey: keyof Colors | (keyof Colors)[]
): Palette | Palette[] {
  const theme = useTheme();

  if (Array.isArray(colorKey)) {
    // colorKey가 배열일 경우
    const palettes: Palette[] = colorKey.map((key) => ({
      normal: theme.colors[key].normal,
      focus: theme.colors[key].light,
      hover: theme.colors[key].light,
      tap: theme.colors[key].dark,
    }));
    return palettes;
  }

  // colorKey가 단일 문자열일 경우
  const palette: Palette = {
    normal: theme.colors[colorKey].normal,
    focus: theme.colors[colorKey].light,
    hover: theme.colors[colorKey].light,
    tap: theme.colors[colorKey].dark,
  };
  return palette;
}

export default usePalette;
