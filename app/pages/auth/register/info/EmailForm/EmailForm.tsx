import FormField from "~/components/ui/FormField";
import Input, { InputGroup } from "~/components/ui/Input";
import { useRegisterStore } from "~/store/registerStore";

import * as S from "./EmailForm.styles";

export default function EmailForm() {
  const { email, setEmail, setIsEmailChecked } = useRegisterStore();

  const handleCheckEmail = () => {
    // TODO: Implement email duplication check
    setIsEmailChecked(true);
  };

  return (
    <FormField label="아이디 (이메일)" required htmlFor="email">
      <InputGroup>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.StyledButton onClick={handleCheckEmail}>중복 확인</S.StyledButton>
      </InputGroup>
    </FormField>
  );
}
