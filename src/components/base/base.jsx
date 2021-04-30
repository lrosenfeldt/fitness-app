import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.h1};
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.h2};
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.h3};
`;

export const P = styled.p`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.text};

  ${({ small }) => 
    small &&
    css`
      color: ${({ theme }) => theme.color.navy};
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: ${({ theme }) => theme.lineHeight.small};
    `}
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const PageWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  padding: 0 17px;
  width: 100vw;
`;
