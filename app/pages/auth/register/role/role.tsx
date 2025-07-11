import { useState } from "react";
import { useNavigate } from "react-router";
import { IoPersonOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { MdArrowForward, MdCheck } from "react-icons/md";
import RegisterStepTop from "~/components/RegisterStepTop";
import RoleRadioButton from "~/components/RoleRadioButton";
import Button from "~/components/Button";
import * as S from "./role.styles";

type Role = "jobSeeker" | "employer";

export default function RolePage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <S.PageContainer>
      <RegisterStepTop
        title="사용 목적 선택"
        description="어떤 목적으로 일당백을 사용하실 건가요?"
      />
      <S.RoleSelectionContainer>
        <RoleRadioButton
          icon={<MdCheck size={32} />}
          label="구직자"
          selected={selectedRole === "jobSeeker"}
          onClick={() => setSelectedRole("jobSeeker")}
        />
        <RoleRadioButton
          icon={<MdCheck size={32} />}
          label="구인자"
          selected={selectedRole === "employer"}
          onClick={() => setSelectedRole("employer")}
        />
      </S.RoleSelectionContainer>
      <S.ButtonContainer>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          이전
        </Button>
        <Button
          onClick={() => navigate("../verify")}
          disabled={!selectedRole}
          icon={<MdArrowForward size={24} />}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.PageContainer>
  );
}
