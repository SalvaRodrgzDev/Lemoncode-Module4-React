import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from '../components/search-bar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2F4368',
        },
        secondary: {
            main: '#940364',
        },
        text: {
            primary: '#fff',
        }
    },
    overrides: {
        // Style sheet name ⚛️
        MuiListItemText: {
          // Name of the rule
            primary: {
                // Some CSS
                color: '#12380d',
            },
        },
        MuiCard: {
            root: {
                maxWidth: '300px',
                margin: '2rem',
                backgroundColor: '#62a4ab',
            }
        },
        MuiCardMedia: {
            root: {
                height: 0,
                paddingTop: '100%', // 1:1
            }
        },
    }
});

export const Layout: React.FunctionComponent = props => {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}>
            <SearchBar />
            <Grid
                container
                alignItems='center'
                justify='center'
                direction='column'
            >
                {children}         
            </Grid>
        </ThemeProvider>
    );
};