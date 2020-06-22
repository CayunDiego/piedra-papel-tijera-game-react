import React from 'react';
import styled from 'styled-components';

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
