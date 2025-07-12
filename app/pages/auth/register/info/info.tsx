import { useState } from "react";
import { useNavigate } from "react-router";
import { MdArrowForward } from "react-icons/md";
import Button from "~/components/Button";
import * as S from "./info.styles";
import RegisterStepTop from "~/components/RegisterStepTop";

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
    <S.PageContainer>
      <RegisterStepTop
        title="회원 정보 입력"
        description="이용하실 회원 정보를 입력해주세요."
      />
      <S.Form>
        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>아이디 (이메일)</S.Label>
          </S.LabelContainer>
          <S.InputGroup>
            <S.Input
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="secondary" onClick={handleCheckEmail}>
              중복 확인
            </Button>
          </S.InputGroup>
        </S.FormRow>

        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>비밀번호</S.Label>
          </S.LabelContainer>
          <S.Input
            type="password"
            placeholder="영문 + 숫자 + 특수문자 조합 8~20자 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {isPasswordInvalid && (
            <S.ErrorMessage>비밀번호 확인이 일치하지 않습니다.</S.ErrorMessage>
          )}
        </S.FormRow>

        <S.FormRow>
          <S.LabelContainer>
            <S.RequiredChip>필수</S.RequiredChip>
            <S.Label>사업자등록번호</S.Label>
          </S.LabelContainer>
          <S.Input
            placeholder="‘-’를 제외하고 입력"
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)}
          />
        </S.FormRow>
      </S.Form>
      <S.ButtonContainer>
        <Button variant="secondary" onClick={() => navigate("/")}>
          취소
        </Button>
        <Button
          onClick={() => navigate("/auth/login")}
          disabled={isNextDisabled}
          icon={<MdArrowForward size={24} />}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.PageContainer>
  );
}
