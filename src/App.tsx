import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </HashRouter>
        </ChakraProvider>
    );
};
