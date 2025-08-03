declare module "job" {
  export type JobType = "cargo" | "industry" | "delivery" | "flex";

  export type Career = number;

  export type Weekday =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";

  export type SalaryType = "hourly" | "daily" | "weekly" | "monthly" | "yearly";

  export interface SalaryRange {
    min: number;
    max: number;
    type: SalaryType;
  }

  export interface Time {
    start: { hour: number; minute: number };
    end: { hour: number; minute: number };
  }

  export interface Location {
    first: string;
    second: string;
    third: string;
  }

  export type RecruitLocation = Location;

  export interface Duration {
    min: number;
    max: number;
  }

  export type WorkLocation = Location;

  export interface Filters {
    type: JobType[] | null;
    career: Career | null;
    weekday: Weekday[] | null;
    salary: SalaryRange | null;
    time: Time | "negotiable" | null;
    recruitLocation: RecruitLocation[] | null;
    duration: Duration | "negotiable" | null;
    workLocation: WorkLocation[] | null;
  }

  export interface Details {
    type: JobType;
    career: number;
    weekday: Weekday[];
    salary: { salary: number; type: SalaryRange["type"] };
    time: Time | "negotiable";
    recruitLocation: Location;
    duration: Duration | "negotiable";
    workLocation: Location;
  }
}
