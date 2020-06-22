import React from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Wrapper from './components/Wrapper'

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, var(--RadiaGradient1) 30%, var(--RadiaGradient2) 100% );
  min-height: 100vh;
  padding: 2em;
  body{
    font-family: var(--Fonts);
  }
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
         <Header/>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
