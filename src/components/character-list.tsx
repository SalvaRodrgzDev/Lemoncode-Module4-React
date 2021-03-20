import { Divider, List } from "@material-ui/core";
import React from "react";
import { CharacterContext } from "../core/character-provider";
import { CharacterEntity } from "../models/CharacterEntity";
import { CharacterListItem } from "./character-list-item";

export const CharacterList: React.FC = () => {
    const characterContext = React.useContext(CharacterContext);
    const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${characterContext.name}`)
            .then((response) => response.json())
            .then((json) => setCharacters(json.results))
            .catch(() => {
                setCharacters([]);
            });
    }, [characterContext]);

    return (
        <>
        <List>
            {characters ?
                characters.map((character) => (
                    <React.Fragment key={character.id}>
                        <CharacterListItem  character={character} />
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                )) :
                null
            }
        </List>
        </>
    )
};
