import { useNavigate } from "react-router";

import FormField from "~/components/FormField";
import Input, { InputGroup } from "~/components/Input";
import Modal from "~/components/Modal";
import RegisterPageLayout from "~/components/RegisterPageLayout";
import { useRegisterStore } from "~/store/registerStore";

import * as S from "./info.styles";
import SimpleModalContent from "./SimpleModalContent";

export default function InfoPage() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    businessNumber,
    setBusinessNumber,
    isEmailChecked,
    setIsEmailChecked,
    selectedRole,
    showCompletionModal,
    setShowCompletionModal,
  } = useRegisterStore();

  const handleCheckEmail = () => {
    // TODO: Implement email duplication check
    setIsEmailChecked(true);
  };

  const isPasswordInvalid = password !== passwordConfirm;
  const isBusinessNumberRequired = selectedRole === "employer";

  const getIsNextDisabled = () => {
    if (!isEmailChecked || !password || !passwordConfirm || isPasswordInvalid) {
      return true;
    }
    if (isBusinessNumberRequired && !businessNumber) {
      return true;
    }
    return false;
  };

  return (
    <RegisterPageLayout
      title="회원 정보 입력"
      description="이용하실 회원 정보를 입력해주세요."
      onNext={() => setShowCompletionModal(true)}
      onPrev={() => navigate(-1)}
      isNextDisabled={getIsNextDisabled()}
    >
      <FormField label="아이디 (이메일)" required htmlFor="email">
        <InputGroup>
          <Input
            id="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.StyledButton variant="secondary" onClick={handleCheckEmail}>
            중복 확인
          </S.StyledButton>
        </InputGroup>
      </FormField>

      <FormField
        label="비밀번호"
        required
        errorMessage={
          isPasswordInvalid && passwordConfirm
            ? "비밀번호 확인이 일치하지 않습니다."
            : undefined
        }
      >
        <Input
          type="password"
          name="password"
          placeholder="영문 + 숫자 + 특수문자 조합 8~20자 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </FormField>

      {isBusinessNumberRequired && (
        <FormField label="사업자등록번호" required htmlFor="businessNumber">
          <Input
            id="businessNumber"
            name="businessNumber"
            placeholder="‘-’를 제외하고 입력"
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)}
          />
        </FormField>
      )}

      <Modal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
      >
        <SimpleModalContent
          title="회원 가입이 완료되었습니다!"
          description={
            "회원 가입이 완료되었습니다.\n다양한 기능을 사용할 수 있습니다."
          }
          onConfirm={() => {
            setShowCompletionModal(false);
            navigate("/auth/login");
          }}
        />
      </Modal>
    </RegisterPageLayout>
  );
}
