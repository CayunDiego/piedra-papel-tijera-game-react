import React from 'react';
import styled from 'styled-components';

const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  padding: ${({name}) => name === 'default' ? '1px' : '0'};
  border: 16px solid ${({color}) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 0 ${({color}) => color.border};
  cursor: pointer;
  z-index: 2;
  &:active{
      transform: scale(.9)
  }
  .fill{
    background: ${({name}) => name === 'default' ? '#122343' : 'white'};
    box-shadow: 0 -4px 0 ${({name}) => name === 'default' ? 'transparent' : '#babfd4'};
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
    },
    default: {
        base: 'transparent',
        border: 'transparent',
    }
}

const Token = ({name = 'default', onClick}) => {
    const image = `./assets/images/icon-${name}.svg`;

    const handleClick = () => {
        onClick(name);
    }

    const color = colors[name];

    return (
        <TokenStyled color={color} onClick={handleClick} name={name}>
            <div className="fill">
                <img src={image} alt=""/>
            </div>
        </TokenStyled>
    )
}

export default Token;
