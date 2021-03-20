import React from 'react';
import { Container } from '@material-ui/core';
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
            primary: 'white',
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
    }
});

export const Layout: React.FunctionComponent = props => {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}>
            <SearchBar />
            <Container>
                {children}
            </Container>
        </ThemeProvider>
    );
};