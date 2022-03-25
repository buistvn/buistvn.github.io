import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Particles from 'react-tsparticles';

export const Home = () => {
    const backgroundColor = useColorModeValue('#68D391', '#38A169');
    const particleColor = useColorModeValue('#1A202C', '#FFFFFF');

    return (
        <Box position="relative" width="100%" height="calc(100vh - 72px)">
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: backgroundColor,
                        },
                    },
                    particles: {
                        color: {
                            value: particleColor,
                        },
                        links: {
                            color: {
                                value: particleColor,
                            },
                            distance: 150,
                            enable: true,
                        },
                        move: {
                            enable: true,
                        },
                        size: {
                            value: 1,
                        },
                        shape: {
                            type: 'circle',
                        },
                    },
                }}
            />
            <Heading
                position="absolute"
                top="42%"
                right="50%"
                transform="translate(50%, -50%)"
                fontSize={['36px', '48px', '60px', '72px']}
                whiteSpace="nowrap"
            >
                Steven Bui
            </Heading>
        </Box>
    );
};
