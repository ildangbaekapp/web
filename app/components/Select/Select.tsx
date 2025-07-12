import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import * as S from "./Select.styles";

type SelectProps = React.ComponentPropsWithoutRef<"select">;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <S.SelectWrapper>
        <S.StyledSelect ref={ref} {...props}>
          {children}
        </S.StyledSelect>
        <S.SelectIcon>
          <MdKeyboardArrowDown />
        </S.SelectIcon>
      </S.SelectWrapper>
    );
  }
);

Select.displayName = "Select";

export default Select;
