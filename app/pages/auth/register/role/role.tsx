import { MdCheck } from "react-icons/md";
import { useNavigate } from "react-router";

import RegisterPageLayout from "~/components/RegisterPageLayout";
import RoleRadioButton from "~/components/RoleRadioButton";
import { useRegisterStore } from "~/store/registerStore";

import * as S from "./role.styles";

export default function RolePage() {
  const navigate = useNavigate();
  const { selectedRole, setSelectedRole } = useRegisterStore();

  return (
    <RegisterPageLayout
      title="사용 목적 선택"
      description="어떤 목적으로 일당백을 사용하실 건가요?"
      onNext={() => navigate("../verify")}
      onPrev={() => navigate(-1)}
      isNextDisabled={!selectedRole}
    >
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
    </RegisterPageLayout>
  );
}
