import FormField from "~/components/ui/FormField";
import Input, { InputGroup } from "~/components/ui/Input";
import Select from "~/components/ui/Select";
import { useRegisterStore } from "~/store/registerStore";

import { telecomOptions } from "./PersonalInfoForm.constants";

export default function PersonalInfoForm() {
  const {
    name,
    setName,
    birthDate,
    setBirthDate,
    gender,
    setGender,
    telecom,
    setTelecom,
  } = useRegisterStore();

  return (
    <>
      <FormField label="이름" required htmlFor="name">
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="휴대폰 명의자"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>

      <FormField label="생년월일 및 성별" required htmlFor="birthDate">
        <InputGroup>
          <Input
            id="birthDate"
            name="birthDate"
            autoComplete="bday"
            placeholder="YYMMDD"
            pattern="\d{6}"
            maxLength={6}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">남성</option>
            <option value="female">여성</option>
          </Select>
        </InputGroup>
      </FormField>

      <FormField label="통신사" required htmlFor="telecom">
        <Select
          id="telecom"
          name="telecom"
          value={telecom}
          onChange={(e) => setTelecom(e.target.value)}
        >
          {telecomOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </FormField>
    </>
  );
}
