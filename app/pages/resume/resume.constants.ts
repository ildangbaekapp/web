import type { Resume } from "@types";

export const mockResume: Resume = {
  id: "1",
  name: "나의 이력서",
  lastUpdated: "2025-08-10 14:00:00",
  filters: {
    type: ["cargo", "delivery"],
    career: 3,
    weekday: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    salary: { min: 3000000, max: 4000000, type: "monthly" },
    time: "negotiable",
    recruitLocation: null,
    duration: null,
    workLocation: [
      {
        first: "서울",
        second: "강남구",
        third: "역삼동",
      },
      {
        first: "서울",
        second: "강남구",
        third: "삼성동",
      },
    ],
  },
  body: "성실함과 꼼꼼함이 저의 가장 큰 장점입니다. 어떤 일이든 맡겨주시면 최선을 다해 완수하겠습니다. 특히 상하차 및 서빙 분야에서 3년 이상의 경력을 가지고 있어, 관련 업무에 빠르게 적응하고 높은 효율을 낼 수 있습니다. 동료들과의 원활한 소통과 협력을 통해 팀워크에도 기여할 수 있습니다. 귀사에서 저의 역량을 발휘하고 함께 성장하고 싶습니다.",
};
