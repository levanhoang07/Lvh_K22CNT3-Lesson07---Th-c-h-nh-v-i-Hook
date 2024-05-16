import React, { createContext, useContext } from 'react';
import LvhUserContext1 from './LvhUserContext1'; // Corrected typo in import statement

export const ThemeContext = createContext('red'); // Creating a context with a default value of 'red'

export default function LvhUserContext() {
    //state
    const theme = useContext(ThemeContext);


    //hàm thay đổi theme
    const lvhHandleChange = ()=>{
        setTheme(theme=='red'?'blue':'red');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2>Demo - UseContext</h2>
                <LvhUserContext1 />
                <button onClick={lvhHandleChange}>Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    );
}
