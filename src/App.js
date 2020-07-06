import React from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Wrapper from './components/Wrapper';
import Game from './components/Game';
import Rules from './components/Rules';

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, var(--RadiaGradient1) 30%, var(--RadiaGradient2) 100% );
  color: white;
  .app-content{
    border: 1px solid red;
    min-height: 100vh;
    padding: 2em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
         <div className='app-content'>
            <Header/>
            <Game/>
            <Rules/>
         </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
