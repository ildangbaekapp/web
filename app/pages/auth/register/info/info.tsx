import { useNavigate } from "react-router";

import SimpleModalContent from "~/components/common/SimpleModalContent";
import Modal from "~/components/Modal";
import RegisterPageLayout from "~/layouts/RegisterContentLayout";
import { useRegisterStore } from "~/store/registerStore";

import BusinessNumberForm from "./BusinessNumberForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";

export default function InfoPage() {
  const navigate = useNavigate();
  const {
    password,
    passwordConfirm,
    businessNumber,
    isEmailChecked,
    selectedRole,
    showCompletionModal,
    setShowCompletionModal,
  } = useRegisterStore();

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
      <EmailForm />
      <PasswordForm />
      {isBusinessNumberRequired && <BusinessNumberForm />}

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
