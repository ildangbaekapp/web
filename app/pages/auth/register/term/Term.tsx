import { useMemo } from "react";
import { useNavigate } from "react-router";

import Checkbox from "~/components/ui/Checkbox";
import RegisterPageLayout from "~/layouts/RegisterContentLayout";
import { useRegisterStore } from "~/store/registerStore";

import { terms } from "./Term.constants";
import * as S from "./Term.styles";
import TermItem from "./TermItem";

const requiredKeys = terms
  .filter((term) => term.required)
  .map((term) => term.key);

export default function TermPage() {
  const navigate = useNavigate();
  const { agreements, setAgreements, setAllAgreed } = useRegisterStore();

  // 각 약관에 대한 동의 핸들러
  const handleAgreementChange =
    (key: keyof typeof agreements) => (checked: boolean) => {
      setAgreements({ ...agreements, [key]: checked });
    };

  // 전체 동의 핸들러
  const handleAllAgreeChange = (checked: boolean) => {
    setAllAgreed(checked);
  };

  // 필수 약관 전체 동의
  const allRequiredAgreed = useMemo(
    () =>
      requiredKeys.every((key) => agreements[key as keyof typeof agreements]),
    [agreements]
  );

  // 전체 약관 동의
  const allAgreed = useMemo(
    () => allRequiredAgreed && agreements.marketing,
    [agreements, allRequiredAgreed]
  );

  return (
    <RegisterPageLayout
      title="이용 약관 동의"
      description="필수 항목 및 선택 항목 약관에 동의해주시길 바랍니다."
      onNext={() => navigate("../role")}
      onCancel={() => navigate(-1)}
      isNextDisabled={!allRequiredAgreed}
    >
      <S.AllAgreeContainer>
        <Checkbox
          checked={allAgreed}
          onChange={handleAllAgreeChange}
          label="필수 및 선택 항목 전체 동의"
          size="large"
        />
      </S.AllAgreeContainer>
      <S.TermsList>
        {terms.map((term) => (
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
        ))}
      </S.TermsList>
    </RegisterPageLayout>
  );
}
