import { MdCall, MdSend } from "react-icons/md";

import type { ApplyType } from "../ApplyModal.types";

export const APPLY_TYPES: { type: ApplyType; label: string }[] = [
  { type: "phone", label: "전화 지원" },
  { type: "resume", label: "이력서 지원" },
];

export const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export const iconMapping = {
  phone: <MdCall />,
  resume: <MdSend />,
};
