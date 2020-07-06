import React from 'react';
import styled from 'styled-components';

const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 16px solid ${({color}) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 0 ${({color}) => color.border};
  background: white;
  cursor: pointer;
  z-index: 2;
  &:active{
      transform: scale(.9)
  }
  .fill{
    box-shadow: 0 -4px 0 #babfd4;
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const colors = {
    paper: {
        base: '#516ef4',
        border: '#2543c3',
    },
    rock: {
        base: '#de3a5a',
        border: '#980e31',
    },
    scissors: {
        base: '#eca81e',
        border: '#c76c14',
    }
}

const Token = ({name}) => {
    const image = `./assets/images/icon-${name}.svg`;
    return (
        <TokenStyled color={colors[name]}>
            <div className="fill">
                <img src={image} alt=""/>
            </div>
        </TokenStyled>
    )
}

export default Token;
