import { useNavigate } from "react-router";

import RegisterPageLayout from "~/layouts/RegisterContentLayout";
import { useRegisterStore } from "~/store/registerStore";

import PersonalInfoForm from "./PersonalInfoForm";
import PhoneVerificationForm from "./PhoneVerificationForm";

export default function Verify() {
  const navigate = useNavigate();
  const { isVerified } = useRegisterStore();

  const isNextDisabled = !isVerified;

  return (
    <RegisterPageLayout
      title="휴대폰 인증"
      description="회원 가입을 위해 휴대폰 인증이 필요합니다."
      onNext={() => navigate("../info")}
      onPrev={() => navigate(-1)}
      isNextDisabled={isNextDisabled}
    >
      <PersonalInfoForm />
      <PhoneVerificationForm />
    </RegisterPageLayout>
  );
}
