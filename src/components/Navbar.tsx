import { Link } from 'react-router-dom';
import { Button, Flex, Text } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Navbar = () => {
    return (
        <Flex justifyContent="center">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                width="75%"
                paddingY="16px"
            >
                <Link to="/">
                    <Text fontSize="18px" fontWeight="500">
                        Steven Bui
                    </Text>
                </Link>
                <Flex alignItems="center" columnGap="16px">
                    <Link to="/about">
                        <Button
                            variant="ghost"
                            fontSize="18px"
                            fontWeight="500"
                        >
                            About
                        </Button>
                    </Link>
                    <Link to="/projects">
                        <Button
                            variant="ghost"
                            fontSize="18px"
                            fontWeight="500"
                        >
                            Projects
                        </Button>
                    </Link>
                    <ColorModeSwitcher />
                </Flex>
            </Flex>
        </Flex>
    );
};
