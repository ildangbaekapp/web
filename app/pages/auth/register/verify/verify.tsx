import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "~/components/Button";
import FormField from "~/components/FormField";
import Input, { InputGroup, InputWrapper } from "~/components/Input";
import RegisterPageLayout from "~/components/RegisterPageLayout";
import Select from "~/components/Select";
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
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("male");
  const [telecom, setTelecom] = useState(telecomOptions[0]);
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleSendCode = () => {
    // TODO: Implement sending verification code
    setIsCodeSent(true);
    setTimerExpired(false);
  };

  const handleVerifyCode = () => {
    // TODO: Implement code verification
    setIsVerified(true);
    setTimerExpired(false);
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
      <FormField label="이름" required>
        <Input
          placeholder="휴대폰 명의자"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>

      <FormField label="생년월일 및 성별" required>
        <InputGroup>
          <Input
            placeholder="YYMMDD"
            maxLength={6}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </Select>
        </InputGroup>
      </FormField>

      <FormField label="통신사" required>
        <Select value={telecom} onChange={(e) => setTelecom(e.target.value)}>
          {telecomOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="휴대폰 번호" required>
        <InputGroup>
          <Input
            placeholder="'-'를 제외하고 입력"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            variant="secondary"
            onClick={handleSendCode}
            disabled={isCodeSent}
          >
            인증 번호 전송
          </Button>
        </InputGroup>
      </FormField>

      {isCodeSent && (
        <FormField
          errorMessage={
            timerExpired ? "인증 시간이 초과되었습니다." : undefined
          }
        >
          <InputGroup>
            <InputWrapper>
              <Input
                placeholder="인증 번호"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                disabled={isVerified}
              />
              {!isVerified && <S.Timer>03:00</S.Timer>}
            </InputWrapper>
            <Button
              variant="primary"
              onClick={handleVerifyCode}
              disabled={isVerified}
            >
              {isVerified ? "인증 완료" : "인증 확인"}
            </Button>
          </InputGroup>
        </FormField>
      )}
    </RegisterPageLayout>
  );
}
