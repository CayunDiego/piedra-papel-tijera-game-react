import React from 'react';
import styled from 'styled-components';
import Token from './Token';

const GameStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .triangle{
    position: absolute;
    width: 202px;
    top: 60px;
  }
`;

const Game = () => {
    return (
        <GameStyled>
            <Token name='paper'/>
            <Token name='scissors'/>
            <Token name='rock'/>
            <img src="./assets/images/bg-triangle.svg" alt="" className='triangle'/>
        </GameStyled>
    )
}

export default Game;
