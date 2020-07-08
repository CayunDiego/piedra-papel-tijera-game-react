import React, { useContext } from 'react';
import styled from 'styled-components';
import { ScoreContext } from '../context/ScoreContetx';

const ScoreStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 10px 0 7px 0;
    border-radius: 8px;
    width: 80px;
    font-weight: 700;
    small{
        color: var(--ScoreText);
        text-transform: uppercase;
        font-size: 12px;
    }
    p{
        color: var(--DarkText);
        font-size: 40px;
        margin: 0;
    }
    @media screen and (min-width: 768px){
    padding: 10px 15px;
    small{
        font-size: 16px;
    }
    p{
      font-size: 50px;
    }
  } 
`;

const Score = () => {
    const { score } = useContext(ScoreContext);
    return (
        <ScoreStyled>
            <small>Score</small>
            <p>{score}</p>
        </ScoreStyled>
    )
}

export default Score;
