export enum Type {
  CARGO = "cargo",
  INDUSTRY = "industry",
  DELIVERY = "delivery",
  FLEX = "flex",
}

export type Career = number;

export enum Weekday {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export interface Salary {
  min: number;
  max: number;
  type: "hourly" | "daily" | "weekly" | "monthly" | "yearly";
}

export interface Time {
  start: { hour: number; minute: number };
  end: { hour: number; minute: number };
}

interface Location {
  first: string;
  second: string;
  third: string;
}

export type RecruitLocation = Location;

export interface duration {
  min: number;
  max: number;
}

export type WorkLocation = Location;

export default interface Filters {
  type: Type[] | null;
  career: Career | null;
  weekday: Weekday[] | null;
  salary: Salary | null;
  time: Time | "negotiable" | null;
  recruitLocation: RecruitLocation[] | null;
  duration: duration | "negotiable" | null;
  workLocation: WorkLocation[] | null;
}
