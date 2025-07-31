import type { ButtonHTMLAttributes } from "react";

import type { Palette } from "~/components/ui/Feedback";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  palette?: Palette;
  color?: string;
  ref?: React.Ref<HTMLDivElement>;
}
