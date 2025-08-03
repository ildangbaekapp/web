import type { Details } from "job";

export const jobs: {
  id: number;
  company: string;
  title: string;
  bookmarked: boolean;
  details: Details;
}[] = [
  {
    id: 1,
    company: "CJ대한통운",
    title: "상하차 인력 구합니다 !!!",
    bookmarked: true,
    details: {
      type: "cargo",
      career: 1,
      weekday: ["monday", "tuesday", "wednesday"],
      salary: { salary: 12000, type: "hourly" },
      time: { start: { hour: 9, minute: 0 }, end: { hour: 18, minute: 0 } },
      recruitLocation: {
        first: "서울",
        second: "강남구",
        third: "역삼동",
      },
      duration: { min: 1, max: 3 },
      workLocation: {
        first: "서울",
        second: "강남구",
        third: "역삼동",
      },
    },
  },

  {
    id: 2,
    company: "배달의민족",
    title: "배달기사 모집합니다",
    bookmarked: false,
    details: {
      type: "delivery",
      career: 0,
      weekday: ["wednesday", "thursday", "friday"],
      salary: { salary: 15000, type: "hourly" },
      time: { start: { hour: 10, minute: 0 }, end: { hour: 20, minute: 0 } },
      recruitLocation: {
        first: "서울",
        second: "마포구",
        third: "상수동",
      },
      duration: { min: 1, max: 2 },
      workLocation: {
        first: "서울",
        second: "마포구",
        third: "상수동",
      },
    },
  },
  {
    id: 3,
    company: "쿠팡",
    title: "쿠팡 물류센터에서 일하실 분 구합니다",
    bookmarked: true,
    details: {
      type: "cargo",
      career: 2,
      weekday: ["monday", "tuesday", "wednesday", "thursday"],
      salary: { salary: 13000, type: "hourly" },
      time: {
        start: { hour: 8, minute: 0 },
        end: { hour: 17, minute: 0 },
      },
      recruitLocation: {
        first: "경기",
        second: "성남시",
        third: "분당구",
      },
      duration: { min: 2, max: 4 },
      workLocation: {
        first: "경기",
        second: "성남시",
        third: "분당구",
      },
    },
  },
];
