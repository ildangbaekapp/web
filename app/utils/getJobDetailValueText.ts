import type { Details, JobType, SalaryRange, Weekday } from "@types";

import getKoreanNumber from "~/utils/getKoreanNumber";

export const getTypeText = (type: JobType): string => {
  switch (type) {
    case "industry":
      return "공장";
    case "delivery":
      return "배달";
    case "flex":
      return "통합";
    case "cargo":
      return "상하차";
    default:
      return type;
  }
};

export const getWeekdayText = (weekday: Weekday): string => {
  switch (weekday) {
    case "monday":
      return "월";
    case "tuesday":
      return "화";
    case "wednesday":
      return "수";
    case "thursday":
      return "목";
    case "friday":
      return "금";
    case "saturday":
      return "토";
    case "sunday":
      return "일";
    default:
      return weekday;
  }
};

export const getSalaryTypeText = (type: SalaryRange["type"]): string => {
  switch (type) {
    case "hourly":
      return "시급";
    case "daily":
      return "일급";
    case "weekly":
      return "주급";
    case "monthly":
      return "월급";
    case "yearly":
      return "연봉";
    default:
      return type;
  }
};

export const formatTime = (time: { hour: number; minute: number }) =>
  `${time.hour.toString().padStart(2, "0")}:${time.minute
    .toString()
    .padStart(2, "0")}`;

export default function getJobDetailValueText<K extends keyof Details>(
  key: K,
  value: Details[K]
): string {
  try {
    switch (key) {
      case "type": {
        const typeValue = value as Details["type"];
        return getTypeText(typeValue);
      }

      case "career": {
        const careerValue = value as Details["career"];
        if (careerValue === 0) return "신입";
        return `경력 ${careerValue}년 이상`;
      }

      case "weekday": {
        const weekdays = value as Details["weekday"];
        if (weekdays === null) return "협의";
        return weekdays.map(getWeekdayText).join(", ") ?? "";
      }

      case "recruitLocation":
      case "workLocation": {
        const locations = value as Details["recruitLocation" | "workLocation"];
        return `${locations.second} ${locations.third}`;
      }

      case "salary": {
        const salary = value as Details["salary"];
        if (salary === null) return "급여 무관";
        return `${getSalaryTypeText(salary.type)} ${getKoreanNumber(
          salary.salary
        )}원`;
      }

      case "time": {
        const time = value as Details["time"];
        if (time === "negotiable") return "협의";
        else return `${formatTime(time.start)} ~ ${formatTime(time.end)}`;
      }

      case "duration": {
        const duration = value as Details["duration"];
        if (duration === "negotiable") return "협의";
        else return `${duration.min}일 ~ ${duration.max}일`;
      }

      default:
        return "설정됨";
    }
  } catch {
    return "설정 오류";
  }
}
