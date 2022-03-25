import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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

const styles = {
    global: (props: any) => ({
        body: {
            background: mode('white', 'gray.900')(props),
        },
    }),
};

const overrides = {
    breakpoints,
    config,
    fonts,
    styles,
};

export const theme = extendTheme(overrides);
