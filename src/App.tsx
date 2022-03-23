import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter>
                <Navbar />
            </HashRouter>
        </ChakraProvider>
    );
};
