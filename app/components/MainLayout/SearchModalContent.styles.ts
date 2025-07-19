import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  display: inline-flex;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const SearchBox = styled.div`
  align-self: stretch;
  height: 60px;
  padding: 0 15px;
  gap: 15px;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  border-radius: 30px;
  outline: 1px solid ${({ theme }) => theme.colors.darkGrey};
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
  color: ${({ theme }) => theme.colors.darkGrey};
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
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
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

export const Filter = styled.div`
  flex-shrink: 0;
  display: flex;
  height: 30px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const FilterCount = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
`;

export const FilterIcon = styled.div`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const HistoryContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

export const HistoryItem = styled.button`
  align-self: stretch;
  padding: 15px 20px;
  overflow: hidden;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const HistoryIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const HistoryText = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-weight: 500;
`;
