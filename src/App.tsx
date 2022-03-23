import { ChakraProvider, theme } from '@chakra-ui/react';

import { ColorModeSwitcher } from './components/ColorModeSwitcher';

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeSwitcher />
        </ChakraProvider>
    );
};
