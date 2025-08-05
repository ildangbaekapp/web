declare module "resume" {
  import type {
    Career,
    Duration,
    JobType,
    RecruitLocation,
    SalaryRange,
    Time,
    Weekday,
  } from "job";

  export interface Resume {
    id: string;
    name: string;
    lastUpdated: string;
    filters: {
      type: JobType[];
      career: Career;
      weekday: Weekday[] | null;
      salary: SalaryRange | null;
      time: Time | "negotiable" | null;
      recruitLocation: RecruitLocation[] | null;
      duration: Duration | "negotiable" | null;
      workLocation: RecruitLocation[] | null;
    };
    body: string;
  }
}
