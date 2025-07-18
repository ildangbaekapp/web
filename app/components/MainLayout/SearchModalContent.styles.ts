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
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  border-radius: 30px;
  outline: 1px solid ${({ theme }) => theme.colors.darkGrey};
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.fontFamily};

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
  color: ${({ theme }) => theme.colors.primary};
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
  align-self: stretch;
  padding: 15px;
  background: ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
`;

export const FilterLeft = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const FilterTitle = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const FilterText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const FilterCount = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
`;

export const FilterIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const HistoryItem = styled.div`
  align-self: stretch;
  padding: 15px 20px;
  overflow: hidden;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;

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
  font-size: 20px;
  font-weight: 500;
`;
