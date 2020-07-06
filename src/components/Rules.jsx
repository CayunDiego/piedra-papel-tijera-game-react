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
    }
    h2{
        color: #3B4262;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0;
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
            <Button onClick={handleToggleClick}/>
        </RulesSyled>
    )
}

export default Rules;
