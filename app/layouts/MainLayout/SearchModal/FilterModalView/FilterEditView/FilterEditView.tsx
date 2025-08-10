import type { Filters } from "@types";
import { useMemo } from "react";

import CareerFilter from "./CareerFilter";
import DurationFilter from "./DurationFilter";
import LocationFilter from "./LocationFilter";
import SalaryFilter from "./SalaryFilter";
import TimeFilter from "./TimeFilter";
import TypeFilter from "./TypeFilter";
import WeekdayFilter from "./WeekdayFilter";

type FilterChangeHandler<K extends keyof Filters> = (value: Filters[K]) => void;

interface FilterEditViewProps<K extends keyof Filters> {
  filterKey: K;
  value: Filters[K];
  onChange: FilterChangeHandler<K>;
}

export default function FilterEditView<K extends keyof Filters>({
  filterKey,
  value,
  onChange,
}: FilterEditViewProps<K>) {
  const Content = useMemo(() => {
    switch (filterKey) {
      case "type":
        return (
          <TypeFilter
            value={value as Filters["type"]}
            onChange={onChange as FilterChangeHandler<"type">}
          />
        );
      case "career":
        return (
          <CareerFilter
            value={value as Filters["career"]}
            onChange={onChange as FilterChangeHandler<"career">}
          />
        );
      case "weekday":
        return (
          <WeekdayFilter
            value={value as Filters["weekday"]}
            onChange={onChange as FilterChangeHandler<"weekday">}
          />
        );
      case "salary":
        return (
          <SalaryFilter
            value={value as Filters["salary"]}
            onChange={onChange as FilterChangeHandler<"salary">}
          />
        );
      case "time":
        return (
          <TimeFilter
            value={value as Filters["time"]}
            onChange={onChange as FilterChangeHandler<"time">}
          />
        );
      case "recruitLocation":
        return (
          <LocationFilter
            value={value as Filters["recruitLocation"]}
            onChange={onChange as FilterChangeHandler<"recruitLocation">}
          />
        );
      case "workLocation":
        return (
          <LocationFilter
            value={value as Filters["workLocation"]}
            onChange={onChange as FilterChangeHandler<"workLocation">}
          />
        );
      case "duration":
        return (
          <DurationFilter
            value={value as Filters["duration"]}
            onChange={onChange as FilterChangeHandler<"duration">}
          />
        );
      default:
        return null;
    }
  }, [filterKey, value, onChange]);

  return Content;
}
