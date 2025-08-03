import type { Salary } from "~/types/filter";

export const salaryTypes: Salary["type"][] = [
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
];

export const salaryTypeText: { [x in Salary["type"]]: string } = {
  hourly: "시급",
  daily: "일급",
  weekly: "주급",
  monthly: "월급",
  yearly: "연봉",
};

export const salaryMinMax: { [x in Salary["type"]]: [number, number] } = {
  hourly: [10000, 100000],
  daily: [50000, 800000],
  weekly: [100000, 4000000],
  monthly: [200000, 20000000],
  yearly: [1000000, 240000000],
};

export const salaryRound: { [x in Salary["type"]]: number } = {
  hourly: 1000,
  daily: 1000,
  weekly: 10000,
  monthly: 100000,
  yearly: 1000000,
};
