import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const Wrapper = ({children}) => {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper;
