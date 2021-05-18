import { useState } from 'react';
import styled, { css } from 'styled-components';
import favIcon from 'assets/images/icon_fav.svg';
import favIconFilled from 'assets/images/icon_fav-filled.svg';


const StyledButton = styled.button`
  ${({ filled }) => {
    if (filled) {
      return css`
        background-image: url(${favIconFilled});
        background-size: auto 20px;
      `;
    }
    return css`
      background-image: url(${favIcon});
      background-size: auto 15px;
    `;
  }}
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 20px;
  grid-area: fav;
  height: 20px;
  transition: all 0.15s ease-in-out;
  width: 30px;
`;

const FavButton = (props) => {
  const [fav, setFav] = useState(props.isFav);
  const favHandler = (event) => {
    setFav(!fav);
  }

  return <StyledButton filled={fav} onClick={favHandler}/>
};

export default FavButton;