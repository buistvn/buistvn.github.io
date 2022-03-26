import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Hide, Show } from '@chakra-ui/react';
import '@fontsource/inter/variable.css';

import { Navbar } from './components/Navbar';
import { NavbarMobile } from './components/NavbarMobile';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { theme } from './styles/theme';

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Hide below="md">
                    <Navbar />
                </Hide>
                <Show below="md">
                    <NavbarMobile />
                </Show>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
