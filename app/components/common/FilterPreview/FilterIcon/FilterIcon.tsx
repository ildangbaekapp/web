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

import type Filters from "~/types/filter";
interface FilterIconProps {
  filter: keyof Filters;
}

export default function FilterIcon({ filter }: FilterIconProps) {
  switch (filter) {
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
