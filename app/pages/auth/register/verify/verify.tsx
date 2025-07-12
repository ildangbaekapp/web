import { useState } from "react";
import { useNavigate } from "react-router";
import { MdArrowForward, MdKeyboardArrowDown } from "react-icons/md";
import RegisterStepTop from "~/components/RegisterStepTop";
import Button from "~/components/Button";
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
    <S.PageContainer>
      <RegisterStepTop
        title="휴대폰 인증"
        description="회원 가입을 위해 휴대폰 인증이 필요합니다."
      />
      <S.Form>
        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>이름</S.Label>
          </S.LabelContainer>
          <S.Input
            placeholder="휴대폰 명의자"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.FormRow>

        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>생년월일 및 성별</S.Label>
          </S.LabelContainer>
          <S.InputGroup>
            <S.Input
              placeholder="YYMMDD"
              maxLength={6}
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <S.SelectWrapper>
              <S.Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">남성</option>
                <option value="female">여성</option>
              </S.Select>
              <S.SelectIcon>
                <MdKeyboardArrowDown />
              </S.SelectIcon>
            </S.SelectWrapper>
          </S.InputGroup>
        </S.FormRow>

        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>통신사</S.Label>
          </S.LabelContainer>
          <S.SelectWrapper>
            <S.Select
              value={telecom}
              onChange={(e) => setTelecom(e.target.value)}
            >
              {telecomOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </S.Select>
            <S.SelectIcon>
              <MdKeyboardArrowDown />
            </S.SelectIcon>
          </S.SelectWrapper>
        </S.FormRow>

        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>휴대폰 번호</S.Label>
          </S.LabelContainer>
          <S.InputGroup>
            <S.Input
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
          </S.InputGroup>
        </S.FormRow>

        {isCodeSent && (
          <S.FormRow>
            <S.InputGroup>
              <S.InputWrapper>
                <S.Input
                  placeholder="인증 번호"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  disabled={isVerified}
                />
                {!isVerified && <S.Timer>03:00</S.Timer>}
              </S.InputWrapper>
              <Button
                variant="primary"
                onClick={handleVerifyCode}
                disabled={isVerified}
              >
                {isVerified ? "인증 완료" : "인증 확인"}
              </Button>
            </S.InputGroup>
            {timerExpired && (
              <S.ErrorMessage>인증 시간이 초과되었습니다.</S.ErrorMessage>
            )}
          </S.FormRow>
        )}
      </S.Form>
      <S.ButtonContainer>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          이전
        </Button>
        <Button
          onClick={() => navigate("../info")}
          disabled={isNextDisabled}
          icon={<MdArrowForward size={24} />}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.PageContainer>
  );
}
