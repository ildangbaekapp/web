import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router";
import RegisterStepTop from "~/components/RegisterStepTop";
import Checkbox from "~/components/Checkbox";
import Button from "~/components/Button";
import TermItem from "~/components/TermItem";
import * as S from "./term.styles";
import { MdArrowForward } from "react-icons/md";

const terms = [
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

const requiredAgreements = ["age", "service", "privacy", "thirdParty"];

export default function TermPage() {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    age: false,
    service: false,
    privacy: false,
    thirdParty: false,
    marketing: false,
  });
  const [allAgreed, setAllAgreed] = useState(false);

  const handleAgreementChange =
    (key: keyof typeof agreements) => (checked: boolean) => {
      setAgreements((prev) => ({ ...prev, [key]: checked }));
    };

  const handleAllAgreeChange = (checked: boolean) => {
    setAllAgreed(checked);
    setAgreements({
      age: checked,
      service: checked,
      privacy: checked,
      thirdParty: checked,
      marketing: checked,
    });
  };

  useEffect(() => {
    const allRequiredAgreed = requiredAgreements.every(
      (key) => agreements[key as keyof typeof agreements]
    );
    const allOptionalAgreed = agreements.marketing;
    if (allRequiredAgreed && allOptionalAgreed) {
      setAllAgreed(true);
    } else {
      setAllAgreed(false);
    }
  }, [agreements]);

  const isNextButtonDisabled = !requiredAgreements.every(
    (key) => agreements[key as keyof typeof agreements]
  );

  return (
    <S.PageContainer>
      <RegisterStepTop
        title="이용 약관 동의"
        description="필수 항목 및 선택 항목 약관에 동의해주시길 바랍니다."
      />
      <S.TermsContainer>
        <S.AllAgreeContainer>
          <Checkbox
            checked={allAgreed}
            onChange={handleAllAgreeChange}
            label="필수 및 선택 항목 전체 동의"
            size="large"
            isAllAgree
          />
        </S.AllAgreeContainer>
        <S.TermsList>
          {terms.map((term, index) => (
            <Fragment key={term.key}>
              <TermItem
                key={term.key}
                term={term}
                checked={agreements[term.key as keyof typeof agreements]}
                onChange={handleAgreementChange(
                  term.key as keyof typeof agreements
                )}
                onDetailClick={() =>
                  alert(`'${term.label}' 상세 페이지로 이동합니다.`)
                }
              />
              {index < terms.length - 1 && <S.Divider />}
            </Fragment>
          ))}
        </S.TermsList>
      </S.TermsContainer>
      <S.ButtonContainer>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button
          onClick={() => navigate("../role")}
          disabled={isNextButtonDisabled}
          icon={<MdArrowForward size={24} />}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.PageContainer>
  );
}
