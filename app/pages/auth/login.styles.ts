import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      125deg,
      #fff 8.44%,
      ${({ theme }) => theme.colors.primaryBg} 91.56%
    );
    padding: 20px;
    box-sizing: border-box;
  `,

  LoginForm: styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    min-height: 600px;
    padding: 60px 40px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 40px 30px;
      max-width: 400px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 30px 20px;
      max-width: 350px;
    }
  `,

  TopSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      gap: 30px;
    }
  `,

  Logo: styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 80px;
      height: 80px;
    }
  `,

  InputContainer: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  `,

  InputField: styled.input`
    display: flex;
    padding: 15px;
    align-items: center;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    background: transparent;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    font-weight: 400;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: ${({ theme }) => theme.colors.darkGrey};
    }

    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 14px;
      padding: 12px;
    }
  `,

  ActionContainer: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  LoginButton: styled.button`
    display: flex;
    height: 48px;
    padding: 13px 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #005d8a;
    }

    &:active {
      background: #004a6e;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 14px;
      height: 44px;
    }
  `,

  LinkContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  `,

  LinkText: styled.a`
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 12px;
    }
  `,

  Divider: styled.div`
    width: 1px;
    height: 10px;
    background: ${({ theme }) => theme.colors.grey};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  `,

  SocialSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  `,

  SocialTitle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
  `,

  SocialLine: styled.div`
    flex: 1;
    height: 1px;
    background: #edf0f3;
  `,

  SocialTitleText: styled.span`
    color: #75787b;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 11px;
    }
  `,

  SocialButtonContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  `,

  SocialButton: styled.button<{ $bgColor: string }>`
    display: flex;
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${({ $bgColor }) => $bgColor};
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 48px;
      height: 48px;
    }
  `,
};
