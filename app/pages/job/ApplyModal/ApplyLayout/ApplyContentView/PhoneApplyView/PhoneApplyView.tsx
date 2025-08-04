import { MdCall, MdContentCopy } from "react-icons/md";

import usePalette from "~/hooks/usePalette";

import * as S from "./PhoneApplyView.styles";

interface PhoneApplyViewProps {
  phoneNumber: string;
}

export default function PhoneApplyView({ phoneNumber }: PhoneApplyViewProps) {
  const palette = usePalette("secondary");

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    // TODO: Add toast message for copy success
  };

  return (
    <S.Wrapper>
      <S.NumberWrapper>
        <S.Left>
          <MdCall size={24} />
          <S.PhoneNumber>{phoneNumber}</S.PhoneNumber>
        </S.Left>

        <S.CopyButtonWrapper palette={palette}>
          <S.CopyButton onClick={handleCopy}>
            <MdContentCopy size={14} />
            복사
          </S.CopyButton>
        </S.CopyButtonWrapper>
      </S.NumberWrapper>
    </S.Wrapper>
  );
}
