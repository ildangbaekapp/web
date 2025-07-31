import type { ButtonHTMLAttributes } from "react";

import type { Palette } from "~/components/ui/Feedback";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  palette?: Palette;
  color?: string;
  ref?: React.Ref<HTMLDivElement>;
}
