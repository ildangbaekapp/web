import * as Filter from "~/types/filter";
import type Filters from "~/types/filter";
import getKoreanNumber from "~/utils/getKoreanNumber";

const getTypeText = (type: Filter.Type): string => {
  switch (type) {
    case Filter.Type.INDUSTRY:
      return "공장";
    case Filter.Type.DELIVERY:
      return "배달";
    case Filter.Type.FLEX:
      return "통합";
    case Filter.Type.CARGO:
      return "상하차";
    default:
      return type;
  }
};

const getWeekdayText = (weekday: Filter.Weekday): string => {
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

const getSalaryTypeText = (type: Filter.Salary["type"]): string => {
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

const formatTime = (time: { hour: number; minute: number }) =>
  `${time.hour.toString().padStart(2, "0")}:${time.minute
    .toString()
    .padStart(2, "0")}`;

export default function getFilterValueText(
  key: keyof Filters,
  value: Filters[keyof Filters]
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
        return getTypeText(typeValue[0]) as string;
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
