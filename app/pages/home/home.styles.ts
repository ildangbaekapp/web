import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10vw 100px 10vw;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 10px 100px 10px;
  }
`;

export const FilterWrapper = styled.div`
  align-self: stretch;
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

export const Filter = styled.div`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const FilterText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const ArrowDropDownIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SectionContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: flex;
`;

export const RowSection = styled.div`
  align-self: stretch;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Ad = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background: ${({ theme }) => theme.colors.grey};
  overflow: hidden;
  border-radius: 24px;
`;

export const Count = styled.div`
  padding: 5px 10px;
  right: 15px;
  bottom: 15px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const CountText = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const RealtimeJobContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 10px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;
