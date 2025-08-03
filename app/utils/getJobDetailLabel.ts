import type { Details } from "job";

export default function getJobDetailLabel(detailKey: keyof Details): string {
  switch (detailKey) {
    case "type":
      return "업종";
    case "career":
      return "경력";
    case "weekday":
      return "요일";
    case "salary":
      return "급여";
    case "time":
      return "근무 시간";
    case "recruitLocation":
      return "모집 지역";
    case "duration":
      return "계약 기간";
    case "workLocation":
      return "근무지";
    default:
      return detailKey;
  }
}
