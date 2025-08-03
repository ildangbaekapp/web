import FormField from "~/components/FormField";
import Input from "~/components/Input";
import { useRegisterStore } from "~/store/registerStore";

export default function BusinessNumberForm() {
  const { businessNumber, setBusinessNumber } = useRegisterStore();

  return (
    <FormField label="사업자등록번호" required htmlFor="businessNumber">
      <Input
        id="businessNumber"
        name="businessNumber"
        placeholder="‘-’를 제외하고 입력"
        value={businessNumber}
        onChange={(e) => setBusinessNumber(e.target.value)}
      />
    </FormField>
  );
}
