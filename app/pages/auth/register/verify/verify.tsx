import { useNavigate } from "react-router";

import FormField from "~/components/FormField";
import Input, { InputGroup, InputWrapper } from "~/components/Input";
import RegisterPageLayout from "~/components/RegisterPageLayout";
import Select from "~/components/Select";
import { useRegisterStore } from "~/store/registerStore";

import * as S from "./verify.styles";

const telecomOptions = [
  "SKT",
  "KT",
  "LG U+",
  "SKT 알뜰폰",
  "KT 알뜰폰",
  "LG U+ 알뜰폰",
];

export default function VerifyPage() {
  const navigate = useNavigate();
  const {
    name,
    setName,
    birthDate,
    setBirthDate,
    gender,
    setGender,
    telecom,
    setTelecom,
    phone,
    setPhone,
    verificationCode,
    setVerificationCode,
    isCodeSent,
    setIsCodeSent,
    isVerified,
    setIsVerified,
    timerExpired,
  } = useRegisterStore();

  const handleSendCode = () => {
    // TODO: Implement sending verification code
    setIsCodeSent(true);
  };

  const handleVerifyCode = () => {
    // TODO: Implement code verification
    setIsVerified(true);
  };

  const isNextDisabled = !isVerified;

  return (
    <RegisterPageLayout
      title="휴대폰 인증"
      description="회원 가입을 위해 휴대폰 인증이 필요합니다."
      onNext={() => navigate("../info")}
      onPrev={() => navigate(-1)}
      isNextDisabled={isNextDisabled}
    >
      <FormField label="이름" required htmlFor="name">
        <Input
          id="name"
          name="name"
          placeholder="휴대폰 명의자"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>

      <FormField label="생년월일 및 성별" required>
        <InputGroup>
          <Input
            name="birthDate"
            placeholder="YYMMDD"
            maxLength={6}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">남성</option>
            <option value="female">여성</option>
          </Select>
        </InputGroup>
      </FormField>

      <FormField label="통신사" required htmlFor="telecom">
        <Select
          id="telecom"
          name="telecom"
          value={telecom}
          onChange={(e) => setTelecom(e.target.value)}
        >
          {telecomOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="휴대폰 번호" required htmlFor="phone">
        <InputGroup>
          <Input
            id="phone"
            name="phone"
            placeholder="'-'를 제외하고 입력"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <S.StyledButton
            variant="secondary"
            onClick={handleSendCode}
            disabled={isCodeSent}
          >
            인증 번호 전송
          </S.StyledButton>
        </InputGroup>
      </FormField>

      {isCodeSent && (
        <FormField
          label="인증 번호"
          required
          htmlFor="verificationCode"
          errorMessage={
            timerExpired ? "인증 시간이 초과되었습니다." : undefined
          }
        >
          <InputGroup>
            <InputWrapper>
              <Input
                id="verificationCode"
                name="verificationCode"
                placeholder="인증 번호"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                disabled={isVerified}
              />
              {!isVerified && !timerExpired && <S.Timer>03:00</S.Timer>}
            </InputWrapper>
            <S.StyledButton
              variant="primary"
              onClick={handleVerifyCode}
              disabled={isVerified}
            >
              {isVerified ? "인증 완료" : "인증 확인"}
            </S.StyledButton>
          </InputGroup>
        </FormField>
      )}
    </RegisterPageLayout>
  );
}
