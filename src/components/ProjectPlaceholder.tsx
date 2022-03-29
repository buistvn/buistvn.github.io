import { AspectRatio, Box, useColorModeValue } from '@chakra-ui/react';

export const ProjectPlaceholder = () => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const placeholderColor = useColorModeValue('gray.100', 'gray.800');

    return (
        <AspectRatio
            ratio={16 / 9}
            maxWidth={['100%', '100%', '100%', '100%', '80%']}
        >
            <Box
                border="1px"
                borderColor={borderColor}
                borderTopRadius="16px"
                borderBottomRadius={['0px', '0px', '0px', '0px', '16px']}
                boxShadow="md"
                backgroundColor={placeholderColor}
            />
        </AspectRatio>
    );
};
