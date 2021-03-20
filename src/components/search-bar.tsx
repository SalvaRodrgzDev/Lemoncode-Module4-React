import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { MemberSearch } from './member-search';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            display: 'none',
            fontSize: '2.4rem',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }),
);

export default function SearchBar() {
    const classes = useStyles();

    return (
        <AppBar position="sticky" >
            <Toolbar>
                <Typography className={classes.title} variant='h1'>
                    Rick And Morty App
                </Typography>
                <MemberSearch />
            </Toolbar>
        </AppBar>
    );
}