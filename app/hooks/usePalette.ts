import { useTheme } from "styled-components";
import type { Colors } from "theme";

import type { Palette } from "~/components/ui/Feedback";

export default function usePalette(colorKey: keyof Colors): Palette {
  const theme = useTheme();

   const palette: Palette = {
    normal: theme.colors[colorKey].normal,
    focus: theme.colors[colorKey].light,
    hover: theme.colors[colorKey].light,
    tap: theme.colors[colorKey].dark,
  };

  return palette;
}
