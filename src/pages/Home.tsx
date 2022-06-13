import { useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';
import Particles from 'react-tsparticles';

export const Home = () => {
    const [distance, setDistance] = useState(150);

    const backgroundColor = useColorModeValue('#FFFFFF', '#171923');
    const particleColor = useColorModeValue('#CBD5E0', '#4A5568');
    const gradientColor = useColorModeValue(
        'linear(to-r, green.500, purple.500)',
        'linear(to-r, green.200, purple.200)'
    );

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
        if (isLargerThan768) {
            setDistance(150);
        } else {
            setDistance(75);
        }
    }, [isLargerThan768]);

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
                            distance: distance,
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
            <Flex
                flexDirection="column"
                alignItems="center"
                position="absolute"
                top="42%"
                right="50%"
                transform="translate(50%, -50%)"
            >
                <Heading
                    fontSize={['36px', '48px', '60px', '72px']}
                    bgGradient={gradientColor}
                    bgClip="text"
                    whiteSpace="nowrap"
                >
                    Steven Bui
                </Heading>
                <Text fontSize={['12px', '16px', '20px', '24px']}>
                    Software Engineer
                </Text>
            </Flex>
        </Box>
    );
};
