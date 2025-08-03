import { Weekday } from "~/types/filter";

export const weekdays: { label: string; value: Weekday }[] = [
  { label: "일", value: Weekday.SUNDAY },
  { label: "월", value: Weekday.MONDAY },
  { label: "화", value: Weekday.TUESDAY },
  { label: "수", value: Weekday.WEDNESDAY },
  { label: "목", value: Weekday.THURSDAY },
  { label: "금", value: Weekday.FRIDAY },
  { label: "토", value: Weekday.SATURDAY },
];
