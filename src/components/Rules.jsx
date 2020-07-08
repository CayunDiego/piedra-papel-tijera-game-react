import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const RulesSyled = styled.div`
    text-align: center;
    .rules-overlay{
        background: white;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 2em;
        h2{
            color: #3B4262;
            text-transform: uppercase;
            font-weight: 700;
            margin: 0;
            margin-bottom: 1em;
        }
    }
    @media screen and (min-width: 1024px){
      .button{
          position: fixed;
          right: 2em;
          bottom: 2em;
      }
      .rules-overlay{
          width: 400px;
          margin: auto;
          top: 0;
          bottom: initial;
          transform: translateY(50%);
          border-radius: 8px;
          h2{
            align-self: flex-start;
            font-size: 32px;
          }
      }
      .close-button{
          position: absolute;
          right: 2em;
          top: 2.5em;
      }
      
    } 
`;

const Rules = () => {
    const [isVisible, setisVisible] = useState(false);

    const handleToggleClick = () => {
        setisVisible(!isVisible);
    }

    return (
        <RulesSyled>
            {
                isVisible && (
                     <div className="rules-overlay">
                        <h2>Rules</h2>
                        <img src="./assets/images/image-rules.svg" alt="reglas del juego"/>
                        <img src="./assets/images/icon-close.svg" alt="Cerrar reglas"
                        onClick={handleToggleClick}
                        className='close-button'/>
                    </div>
                )
            }
            <Button onClick={handleToggleClick} className="button">
                Rules
            </Button>
        </RulesSyled>
    )
}

export default Rules;
