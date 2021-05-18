import styled, { css } from 'styled-components';
import { NavLink as UnstyledNavLink } from 'react-router-dom';

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

export const NavLink = styled(UnstyledNavLink)`
  color: ${({ theme }) => theme.color.navy};
  font-size: ${({ theme }) => theme.fontSize.navLink};
  font-weight: ${({ theme }) => theme.fontWeight.navLink};
  letter-spacing: ${({ theme }) => theme.letterSpacing.navLink};
  line-height: ${({ theme }) => theme.lineHeight.navLink};
  text-transform: uppercase;
`;

export const Img = styled.img`
  height: ${(props) => props.portrait ? "100%" : "auto"};
  width: ${(props) => props.portrait ? "auto" : "100%"};
`;

export const PageWrapper = styled.div`
  --navHeight: ${({ theme }) => theme.navHeight};
  box-sizing: border-box;
  margin-bottom: calc(var(--navHeight) + 20px);
  position: relative;
  width: 100vw;
`;

export const SectionWrapper = styled.section`
  padding: 0 17px;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.color || props.theme.color.navy};
  border-radius: 50%;
  height: ${(props) => props.size || props.theme.fontSize.small};
  width: ${(props) => props.size || props.theme.fontSize.small};
`;
