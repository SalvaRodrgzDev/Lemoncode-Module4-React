import React from 'react';

interface CharacterContext {
    name: string;
    setName: (value: string) => void;
}

const defaultValue: string = 'poopybutthole';

export const CharacterContext = React.createContext<CharacterContext>({
    name: '',
    setName: (value) => console.log('missing context provider')
});

export const CharacterProvider: React.FC = props => {
    const [name, setName] = React.useState(defaultValue);
    
    return (
        <CharacterContext.Provider
            value={{
                name,
                setName,
            }}
        >
        {props.children}
        </CharacterContext.Provider>
        );
    };