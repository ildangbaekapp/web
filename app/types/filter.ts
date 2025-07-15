export enum Type {
  CARGO = "cargo",
  INDUSTRY = "industry",
  DILIVERY = "delivery",
  FLEX = "flex",
}

export type Carreer = number;

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

export type duration = number;

export type WorkLocation = Location;
