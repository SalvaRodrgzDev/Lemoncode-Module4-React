import { Card, CardContent, CardMedia, Chip, createStyles, List, ListItem, ListItemText, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterEntity } from '../models/CharacterEntity';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '1rem 0.2rem',
        },
    }),
);

const formatCreatedDate = (createdDate: string) => new Date(createdDate).toDateString()

export const CharacterDetail: React.FC = () => {
    const { id } = useParams<Record<string, string>>();
    const [ character, setCharacter ] = React.useState<CharacterEntity>();
    const classes = useStyles();

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(json => setCharacter(json))
    }, [])
    return (
        character ?
        <Card>
            <CardMedia
                image={character.image}
                title={character.name}
                />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {character.name}
                </Typography>
                <Chip className={classes.root} label={character.status} />
                <Chip className={classes.root} label={character.gender} />
                <Typography>
                    Created Date
                </Typography>
                <Typography gutterBottom variant='h6' component='h3'>
                    { formatCreatedDate(character.created) }
                </Typography>
            </CardContent>
        </Card> :
        null
    )
}