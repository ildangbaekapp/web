import type { Filters } from "@types";

import {
  formatTime,
  getSalaryTypeText,
  getTypeText,
  getWeekdayText,
} from "~/utils/getJobDetailValueText";
import getKoreanNumber from "~/utils/getKoreanNumber";

export default function getFilterValueText<K extends keyof Filters>(
  key: K,
  value: Filters[K]
): string {
  try {
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      return "설정 안 함";
    }

    switch (key) {
      case "type": {
        const typeValue = value as Exclude<Filters["type"], null>;
        if (typeValue.length > 1)
          return `${getTypeText(typeValue[0])} 외 ${typeValue.length - 1}종`;
        return getTypeText(typeValue[0]);
      }

      case "career": {
        const careerValue = value as Exclude<Filters["career"], null>;
        if (careerValue === 0) return "신입";
        return `경력 ${careerValue}년 이상`;
      }

      case "weekday": {
        const weekdays = value as Exclude<Filters["weekday"], null>;
        if (weekdays === null) return "협의";
        return weekdays.map(getWeekdayText).join(", ") ?? "";
      }

      case "recruitLocation":
      case "workLocation": {
        const locations = value as Exclude<
          Filters["recruitLocation" | "workLocation"],
          null
        >;
        if (locations.length > 1)
          return `${locations[0].second} ${locations[0].third} 외 ${
            locations.length - 1
          }개`;
        return `${locations[0].second} ${locations[0].third}`;
      }

      case "salary": {
        const salary = value as Exclude<Filters["salary"], null>;
        if (salary === null) return "급여 무관";
        return `${getSalaryTypeText(salary.type)} ${getKoreanNumber(
          salary.min
        )}원 ~ ${getKoreanNumber(salary.max)}원`;
      }

      case "time": {
        const time = value as Filters["time"];
        if (time === "negotiable") return "협의";
        if (time === null) return "시간 무관";
        if (typeof time === "object") {
          return `${formatTime(time.start)} ~ ${formatTime(time.end)}`;
        }
        return "설정 안 함";
      }

      case "duration": {
        const duration = value as Filters["duration"];
        if (duration === "negotiable") return "협의";
        if (duration === null) return "기간 무관";
        if (typeof duration === "object") {
          return `${duration.min}일 ~ ${duration.max}일`;
        }
        return "설정 안 함";
      }

      default:
        return "설정됨";
    }
  } catch {
    return "설정 오류";
  }
}
