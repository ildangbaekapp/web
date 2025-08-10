import type { Filters } from "@types";
import {
  MdCategory,
  MdWorkHistory,
  MdViewWeek,
  MdMoney,
  MdSchedule,
  MdEmergencyShare,
  MdDateRange,
  MdLocationOn,
} from "react-icons/md";

interface IconProps {
  detailKey: keyof Filters;
}

export default function Icon({ detailKey }: IconProps) {
  switch (detailKey) {
    case "type":
      return <MdCategory />;
    case "career":
      return <MdWorkHistory />;
    case "weekday":
      return <MdViewWeek />;
    case "salary":
      return <MdMoney />;
    case "time":
      return <MdSchedule />;
    case "recruitLocation":
      return <MdEmergencyShare />;
    case "duration":
      return <MdDateRange />;
    case "workLocation":
      return <MdLocationOn />;
    default:
      return null;
  }
}
