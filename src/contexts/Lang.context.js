import { useState, createContext, useEffect } from 'react';

const LangContext = createContext();

const LangProvider = props => {
    const [ isLang, setIsLang ] = useState('English');
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <LangContext.Provider value={{isLang, setIsLang, isOpen, setIsOpen}}>
            {props.children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider }