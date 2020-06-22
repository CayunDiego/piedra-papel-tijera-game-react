import React from 'react';
import styled from 'styled-components';

const ScoreStyled = styled.div`
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    small{
        color: var(--ScoreText);
        text-transform: uppercase;
        font-size: 10px;
    }
    p{
        color: var(--DarkText);
        font-size: 40px;
        font-weight: 700;
        margin: 0;
    }
`;

const Score = () => {
    return (
        <ScoreStyled>
            <small>Score</small>
            <p>12</p>
        </ScoreStyled>
    )
}

export default Score;
