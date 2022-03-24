import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';

import { theme } from './styles/theme';
import { App } from './App';

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
