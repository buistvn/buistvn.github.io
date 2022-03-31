import { Box, useColorModeValue, useMediaQuery } from '@chakra-ui/react';

export const ProjectPlaceholder = () => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const placeholderColor = useColorModeValue('gray.100', 'gray.800');

    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

    if (isLargerThan1200) {
        return (
            <Box
                border="1px"
                borderColor={borderColor}
                borderRadius="16px"
                boxShadow="md"
                backgroundColor={placeholderColor}
            />
        );
    } else {
        return (
            <Box borderTopRadius="16px" backgroundColor={placeholderColor} />
        );
    }
};
