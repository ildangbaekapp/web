import * as S from "./RadioButton.styles";

interface RadioButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function RadioButton({ checked, onChange }: RadioButtonProps) {
  const handleChange = () => {
    // Radio buttons are typically controlled in a group,
    // so clicking one that's already checked shouldn't uncheck it.
    if (!checked) {
      onChange(true);
    }
  };

  return (
    <S.RadioButtonContainer onClick={handleChange}>
      <S.Circle $checked={checked}>
        {checked && <S.InnerCircle />}
      </S.Circle>
    </S.RadioButtonContainer>
  );
}
