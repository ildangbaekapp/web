import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "~/components/Button";
import FormField from "~/components/FormField";
import Input, { InputGroup } from "~/components/Input";
import RegisterPageLayout from "~/components/RegisterPageLayout";

export default function InfoPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");

  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleCheckEmail = () => {
    // TODO: Implement email duplication check
    setIsEmailChecked(true);
  };

  const isPasswordInvalid =
    password && passwordConfirm && password !== passwordConfirm;

  const isNextDisabled =
    !isEmailChecked ||
    !password ||
    !passwordConfirm ||
    isPasswordInvalid ||
    !businessNumber;

  return (
    <RegisterPageLayout
      title="회원 정보 입력"
      description="이용하실 회원 정보를 입력해주세요."
      onNext={() => navigate("/auth/login")}
      onCancel={() => navigate("/")}
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

      <FormField label="사업자등록번호" required htmlFor="businessNumber">
        <Input
          id="businessNumber"
          placeholder="‘-’를 제외하고 입력"
          value={businessNumber}
          onChange={(e) => setBusinessNumber(e.target.value)}
        />
      </FormField>
    </RegisterPageLayout>
  );
}
