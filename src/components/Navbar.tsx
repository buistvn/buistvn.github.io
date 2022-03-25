import { Link } from 'react-router-dom';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { SiCoderwall } from 'react-icons/si';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Navbar = () => {
    return (
        <Flex justifyContent="center">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                width={['95%', '95%', '85%', '75%']}
                paddingY="16px"
            >
                <Link to="/">
                    <Flex alignItems="center" columnGap="4px">
                        <Icon as={SiCoderwall} width="24px" height="24px" />
                        <Text fontSize="32px" fontWeight="700" lineHeight="1">
                            SB
                        </Text>
                    </Flex>
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
