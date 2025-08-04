import type { ApplyType } from "../ApplyModal.types";

export const APPLY_TYPES: { type: ApplyType; label: string }[] = [
  { type: "phone", label: "전화 지원" },
  { type: "sms", label: "문자 지원" },
  { type: "resume", label: "이력서 지원" },
];
