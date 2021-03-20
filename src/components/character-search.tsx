import { TextField } from '@material-ui/core';
import React from 'react';
import { CharacterContext } from '../core/character-provider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useDebounce } from 'use-debounce/lib';
// import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: '.8rem',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                },
            },
            '& label': {
                color: 'white',
                '&.Mui-focused': {
                    color: 'white',
                    borderColor: 'white',
                }
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
                '& fieldset': {
                    borderColor: 'white',
                },
            }
        },
    }),
);


export const CharacterSearch: React.FC = (props) => {
    const { name, setName } = React.useContext(CharacterContext);
    const [ filter, setFilter ] = React.useState(name);
    const [ debouncedFilter ] = useDebounce(filter, 350);
    const classes = useStyles();
    // const history = useHistory();

    React.useEffect(() => {
        setName(filter);
        // history.push('/'); Intento redirigir a la lista de personajes pero me da undefined
    }, [debouncedFilter])

    return (
        <TextField
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={classes.root}
            label='Search character'
            variant='outlined' />
    )
}