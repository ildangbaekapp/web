import FormField from "~/components/FormField";
import Input, { InputGroup, InputWrapper } from "~/components/Input";
import { useRegisterStore } from "~/store/registerStore";

import * as S from "./PhoneVerificationForm.styles";

export default function PhoneVerificationForm() {
  const {
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

  return (
    <>
      <FormField label="휴대폰 번호" required htmlFor="phone">
        <InputGroup>
          <Input
            id="phone"
            name="phone"
            placeholder="'-'를 제외하고 입력"
            pattern="\d{10,11}"
            maxLength={11}
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <S.StyledButton onClick={handleSendCode} disabled={isCodeSent}>
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
                pattern="\d{6}"
                maxLength={6}
                autoComplete="one-time-code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                disabled={isVerified}
              />
              {!isVerified && !timerExpired && <S.Timer>03:00</S.Timer>}
            </InputWrapper>
            <S.StyledButton onClick={handleVerifyCode} disabled={isVerified}>
              {isVerified ? "인증 완료" : "인증 확인"}
            </S.StyledButton>
          </InputGroup>
        </FormField>
      )}
    </>
  );
}
