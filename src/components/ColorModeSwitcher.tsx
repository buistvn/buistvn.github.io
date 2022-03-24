import {
    IconButton,
    IconButtonProps,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(BsMoon, BsSun);

    return (
        <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    );
};
