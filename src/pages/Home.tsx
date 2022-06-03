import { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';
import Particles from 'react-tsparticles';

export const Home = () => {
    const [distance, setDistance] = useState(0);

    const backgroundColor = useColorModeValue('#68D391', '#38A169');
    const particleColor = useColorModeValue('#1A202C', '#FFFFFF');

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
