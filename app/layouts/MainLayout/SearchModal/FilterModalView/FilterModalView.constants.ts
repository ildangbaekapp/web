import type { Filters } from "@types";

export const filterLabels: {
  [key in keyof Filters]: string;
} = {
  type: "업종",
  career: "경력",
  weekday: "요일",
  salary: "급여",
  time: "근무 시간",
  recruitLocation: "모집 지역",
  duration: "계약 기간",
  workLocation: "근무지",
};
