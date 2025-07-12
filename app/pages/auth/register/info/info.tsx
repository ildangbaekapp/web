import { useNavigate } from "react-router";
import Button from "~/components/Button";
import FormField from "~/components/FormField";
import Input, { InputGroup } from "~/components/Input";
import RegisterPageLayout from "~/components/RegisterPageLayout";
import Modal from "~/components/Modal";
import { useRegisterStore } from "~/store/registerStore";

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

  const isPasswordInvalid =
    password && passwordConfirm && password !== passwordConfirm;

  // Business number is required only if the selected role is 'employer'
  const isBusinessNumberRequired = selectedRole === "employer";

  const isNextDisabled =
    !isEmailChecked ||
    !password ||
    !passwordConfirm ||
    isPasswordInvalid ||
    (isBusinessNumberRequired && !businessNumber); // Conditionally require businessNumber

  return (
    <RegisterPageLayout
      title="회원 정보 입력"
      description="이용하실 회원 정보를 입력해주세요."
      onNext={() => setShowCompletionModal(true)}
      onPrev={() => navigate(-1)}
      isNextDisabled={isNextDisabled}
    >
      <FormField label="아이디 (이메일)" required htmlFor="email">
        <InputGroup>
          <Input
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="secondary" onClick={handleCheckEmail}>
            중복 확인
          </Button>
        </InputGroup>
      </FormField>

      <FormField
        label="비밀번호"
        required
        errorMessage={
          isPasswordInvalid ? "비밀번호 확인이 일치하지 않습니다." : undefined
        }
      >
        <Input
          type="password"
          placeholder="영문 + 숫자 + 특수문자 조합 8~20자 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </FormField>

      {selectedRole === "employer" && (
        <FormField label="사업자등록번호" required htmlFor="businessNumber">
          <Input
            id="businessNumber"
            placeholder="‘-’를 제외하고 입력"
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)}
          />
        </FormField>
      )}

      <Modal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
      ></Modal>
    </RegisterPageLayout>
  );
}
