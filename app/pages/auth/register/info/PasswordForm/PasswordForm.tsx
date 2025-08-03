import FormField from "~/components/FormField";
import Input from "~/components/Input";
import { useRegisterStore } from "~/store/registerStore";

export default function PasswordForm() {
  const { password, setPassword, passwordConfirm, setPasswordConfirm } =
    useRegisterStore();

  const isPasswordInvalid = password !== passwordConfirm;

  return (
    <FormField
      label="비밀번호"
      required
      errorMessage={
        isPasswordInvalid && passwordConfirm
          ? "비밀번호 확인이 일치하지 않습니다."
          : undefined
      }
    >
      <Input
        type="password"
        name="password"
        autoComplete="new-password"
        required
        placeholder="영문 + 숫자 + 특수문자 조합 8~20자 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        name="passwordConfirm"
        autoComplete="new-password"
        required
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
    </FormField>
  );
}
