import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { generatePath, Link } from 'react-router-dom';
import { CharacterEntity } from '../models/CharacterEntity';

interface Props {
    character: CharacterEntity;
}

export const CharacterListItem: React.FC<Props> = (props) => {
    const { character } = props;

    return (
        <ListItem
            button
            component={Link}
            to={generatePath('/detail/:id', { id: character.id })}
            alignItems='center'
            style={{padding: '1rem'}}>
            <ListItemAvatar>
                <Avatar variant='rounded' src={character.image} style={{ width: '5rem', height: '5rem' }} />
            </ListItemAvatar>
            <ListItemText
                primary={character.name}
                secondary={`${character.gender} / ${character.status} / ${character.species}`}
                style={{marginLeft: '1.5rem'}} />
        </ListItem>
    )
}