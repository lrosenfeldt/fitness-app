import styled from "styled-components";
import { NavLink, Dot } from "components/base/base";

const StyledDot = styled(Dot)`
  margin: auto;
  background-color: ${({ theme }) => theme.color.beige};
`;

const StyledP = styled(NavLink)`
  margin: auto;
  margin-top: 4px;
`;

const Tag = ({ children }) => {
  return (
    <div>
      <StyledDot />
      <StyledP as="p">{children}</StyledP>
    </div>
  );
};

export default Tag;
