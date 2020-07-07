import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Token from './Token';
import { WhiteButton } from './Button';
import { ScoreContext } from '../context/ScoreContetx';

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
  .in-game{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results{
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      text-transform: uppercase;
    }
  }
`;

const elements = ['paper', 'scissors', 'rock'];

const Game = () => {
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState('');
  const [housePick, setHousePick] = useState('default');
  const [results, setResults] = useState('');
  const { setScore } = useContext(ScoreContext);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const louchHousePick = () => {
    return new Promise((resolve, ) => {
      let pick;
      const interval = setInterval(()=>{
        pick = elements[getRandomInt(0,3)];
        setHousePick(pick);
      },75);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      },2000);
    });
  }

  const onClick = async name => {
    setPlaying(true);
    setPick(name);
    const house = await louchHousePick();
    const result = playGame(name, house);
    setResults(result);
    if(result === 'win'){
      setScore(prev => prev + 1);
    }
  }

  const handleTryAgainClick = () => {
    setPlaying(false);
  }

  const playGame = (pick, housePick) => {
    if(pick === housePick){
      return 'draw';
    }
    if(pick === 'paper'){
      if(housePick === 'scissors'){
        return 'lose';
      }
      if(housePick === 'rock'){
        return 'win';
      }
    }
    if(pick === 'scissors'){
      if(housePick === 'paper'){
        return 'win';
      }
      if(housePick === 'rock'){
        return 'lose';
      }
    }
    if(pick === 'rock'){
      if(housePick === 'paper'){
        return 'lose';
      }
      if(housePick === 'scissors'){
        return 'win';
      }
    }
  }

  return (
      <GameStyled>
        {
          !playing ? (
                      <>
                        <Token name='paper' onClick={onClick}/>
                        <Token name='scissors' onClick={onClick}/>
                        <Token name='rock' onClick={onClick}/>
                        <img src="./assets/images/bg-triangle.svg" alt="" className='triangle'/>
                      </>
                    )
                  : (
                    <>
                      <div className='in-game'>
                        <Token name={pick}/>
                        <p>You Picked</p>
                      </div>
                      <div className='in-game'>
                        <Token name={housePick}/>
                        <p>The house Picked</p>
                      </div>
                      <div className="results">
                      <h2>You {results}</h2>
                        <WhiteButton onClick={handleTryAgainClick}>
                          Play again
                        </WhiteButton>
                      </div>
                    </>
                  )
        }
      </GameStyled>
  )
}

export default Game;
