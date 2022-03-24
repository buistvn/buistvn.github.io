import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '1536px',
};

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const fonts = {
    heading: 'InterVariable, sans-serif',
    body: 'InterVariable, sans-serif',
};

const overrides = {
    breakpoints,
    config,
    fonts,
};

export const theme = extendTheme(overrides);
