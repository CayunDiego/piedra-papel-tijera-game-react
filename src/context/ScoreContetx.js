import React, { createContext, useState } from 'react';

export const ScoreContext = createContext(0);

const ScoreContetx = ({children}) => {
    const [score, setScore] = useState(0);
    return (
        <ScoreContext.Provider value={{score, setScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContetx;