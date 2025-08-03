import type { DetailedJob, WithBookmark } from "job";

export const mockJob: WithBookmark<DetailedJob> = {
  id: 1,
  company: "CJ대한통운",
  title: "상하차 인력 구합니다 !!!",
  description:
    "예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.\n\n지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다.",
  thumbnail: "https://placehold.co/200",
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
  isBookmarked: true,
  images: ["https://placehold.co/600x400", "https://placehold.co/1000x400"],
};
