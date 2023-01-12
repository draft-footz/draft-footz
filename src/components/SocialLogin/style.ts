import styled from "styled-components";

export const SocialLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  width: 130px;
  padding: 10px;
  gap: 10px;

  background: var(--inputsBackground);
  border-radius: 6px;

  @media (min-width: 375px) {
    width: 145px;
  }
`;
