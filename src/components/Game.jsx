import React from 'react';
import styled from 'styled-components';
import Token from './Token';

const GameStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 50px;
  margin: 2em 0;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
`;

const Game = () => {
    return (
        <GameStyled>
            <Token name='paper'/>
            <Token name='scissors'/>
            <Token name='rock'/>
        </GameStyled>
    )
}

export default Game;
