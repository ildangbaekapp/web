export const terms = [
  {
    key: "age",
    label: "서비스 이용 연령",
    description: "본인은 만 20세 이상입니다.",
    required: true,
    hasDetailPage: false,
  },
  {
    key: "service",
    label: "서비스 이용 약관",
    description: "서비스 이용 약관에 동의합니다.",
    required: true,
    hasDetailPage: true,
  },
  {
    key: "privacy",
    label: "개인정보 수집 및 처리 방침",
    description: "개인정보 수집 및 처리 방침에 동의합니다.",
    required: true,
    hasDetailPage: true,
  },
  {
    key: "thirdParty",
    label: "개인정보 제3자 제공 약관",
    description: "개인정보 제3자 제공 약관에 동의합니다.",
    required: true,
    hasDetailPage: true,
  },
  {
    key: "marketing",
    label: "마케팅 정보 제공 동의",
    description: "마케팅 정보 제공에 동의합니다.",
    required: false,
    hasDetailPage: false,
  },
];
