import React from 'react';
import styled, { keyframes } from 'styled-components';

const shadow = keyframes`
    to {
        box-shadow: 0 0 0 20px rgba(255,255,255,.03), 0 0 0 40px rgba(255,255,255,.02), 0 0 0 60px rgba(255,255,255,.02);
        transform: rotateZ(360deg) scale(1.1);
    }
`;

const box = keyframes`
    to {
        transform: rotateY(360deg);
    }
`;


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
  cursor: pointer;
  z-index: 2;
  animation: 1s ${({isShadowAnimated}) => isShadowAnimated ? shadow : ''} forwards;
  box-shadow: 0 5px 0 ${({color}) => color.border};
  &:active{
      transform: scale(.9)
  }
  .box{
    background: ${({name}) => name === 'default' ? '#122343' : 'white'};
    box-shadow: 0 -4px 0 ${({name}) => name === 'default' ? 'transparent' : '#babfd4'};
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 40%;
        animation: 1s ${({isShadowAnimated}) => isShadowAnimated ? box : ''} forwards;
    }
  }
  @media screen and (min-width: 768px){
      width: 200px;
      height: 195px;
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

const Token = ({name = 'default', onClick, isShadowAnimated = false}) => {
    const image = `./assets/images/icon-${name}.svg`;

    const handleClick = () => {
        if(onClick){
            onClick(name);
        }
    }

    const color = colors[name];

    return (
        <TokenStyled color={color} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated}>
            <div className="box">
                <img src={image} alt=""/>
            </div>
        </TokenStyled>
    )
}

export default Token;
