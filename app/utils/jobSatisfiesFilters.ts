import type { Details, Filters, Location } from "job";

const isSameLocation = (a: Location, b: Location) =>
  a.first === b.first && a.second === b.second && a.third === b.third;

const timeToMinutes = (time: { hour: number; minute: number }) =>
  time.hour * 60 + time.minute;

export default function jobSatisfiesFilters(
  job: Details,
  filters: Filters
): boolean {
  if (filters.type && filters.type.length > 0) {
    if (!filters.type.includes(job.type)) {
      return false;
    }
  }

  if (filters.career !== null) {
    if (job.career < filters.career) {
      return false;
    }
  }

  if (filters.weekday && filters.weekday.length > 0) {
    if (!job.weekday.some((day) => filters.weekday?.includes(day))) {
      return false;
    }
  }

  if (filters.salary) {
    if (
      job.salary.type !== filters.salary.type ||
      job.salary.salary < filters.salary.min ||
      job.salary.salary > filters.salary.max
    ) {
      return false;
    }
  }

  if (filters.time) {
    if (job.time === "negotiable") {
      // "negotiable" job time satisfies any time filter
    } else if (filters.time === "negotiable") {
      // but "negotiable" filter requires "negotiable" job time
      return false;
    } else {
      const jobStart = timeToMinutes(job.time.start);
      const jobEnd = timeToMinutes(job.time.end);
      const filterStart = timeToMinutes(filters.time.start);
      const filterEnd = timeToMinutes(filters.time.end);
      if (jobStart < filterStart || jobEnd > filterEnd) {
        return false;
      }
    }
  }

  if (filters.recruitLocation && filters.recruitLocation.length > 0) {
    if (
      !filters.recruitLocation.some((loc) =>
        isSameLocation(loc, job.recruitLocation)
      )
    ) {
      return false;
    }
  }

  if (filters.duration) {
    if (job.duration === "negotiable") {
      // "negotiable" job duration satisfies any duration filter
    } else if (filters.duration === "negotiable") {
      // but "negotiable" filter requires "negotiable" job duration
      return false;
    } else {
      if (
        job.duration.min < filters.duration.min ||
        job.duration.max > filters.duration.max
      ) {
        return false;
      }
    }
  }

  if (filters.workLocation && filters.workLocation.length > 0) {
    if (
      !filters.workLocation.some((loc) => isSameLocation(loc, job.workLocation))
    ) {
      return false;
    }
  }

  return true;
}
