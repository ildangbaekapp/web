import styled from "styled-components";

import Button from "~/components/Button";

export const Wrapper = styled.div`
  width: min(600px, 90vw);
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Header = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 0;
`;

export const SearchBox = styled.div`
  align-self: stretch;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  gap: 15px;
  background: ${({ theme }) => theme.colors.background.normal};
  overflow: hidden;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 0;
  min-width: 0;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.foreground.light};
  font-size: 24px;
  font-weight: 500;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fontFamily};
  min-width: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary.normal};
  }
`;

export const SearchIcon = styled.div`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.colors.foreground.light};
`;

export const Body = styled.div`
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

export const Filter = styled(Button)`
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  height: 36px;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 9999px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const FilterText = styled.div`
  color: ${({ theme }) => theme.colors.background.normal};
  font-size: 14px;
  font-weight: 500;
`;

export const FilterCount = styled.div`
  color: ${({ theme }) => theme.colors.foreground.light};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 50%;
  width: 16px;
  height: 16px;
`;

export const FilterIcon = styled.div`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.background.normal};
`;

export const HistoryContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

export const HistoryItem = styled(Button)`
  align-self: stretch;
  padding: 15px 20px;
  height: auto;
  overflow: hidden;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const HistoryIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.foreground.light};
`;

export const HistoryText = styled.div`
  color: ${({ theme }) => theme.colors.foreground.light};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-weight: 500;
`;
