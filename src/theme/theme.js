import { css } from 'styled-components';

const Theme = {
  fontSize: 14,
  colors: {
    blue: '#1D2A73',
    pink: '#F5EBDD',
    lightBlue: '3EC1F3',
  },
  h1: css`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 43.88px
  `,
  h2: css`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29.26px
  `,
  text: css`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px
  `,
  smallText: css`
    ${({ theme }) => theme.text};
    font-size: 12px; 
    line-height: 15px;
  `,
  link: css`
    ${({ theme }) => theme.text};
    font-family: Roboto;
    font-size: 10px;
    letter-spacing: 0.2em;
    line-height: 11.72px;
    text-transform: uppercase;
  `,
 };

export default Theme;