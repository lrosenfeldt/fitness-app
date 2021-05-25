import styled from "styled-components";
import { useHistory } from "react-router-dom";
import backArrowIcon from "assets/images/icon_back_arrow.png";

const StyledButton = styled.button`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${backArrowIcon});
  height: 18px;
  width: 18px;
`;

const ArrowButton = () => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return <StyledButton onClick={goBackHandler} />;
};

export default ArrowButton;
