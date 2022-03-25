import { Link } from 'react-router-dom';
import {
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    IconButtonProps,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { SiCoderwall } from 'react-icons/si';

import { ColorModeSwitcher } from './ColorModeSwitcher';

type NavbarMobileProps = Omit<IconButtonProps, 'aria-label'>;

export const NavbarMobile: React.FC<NavbarMobileProps> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex justifyContent="center">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                width={['96%', '96%', '96%', '75%']}
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
                    <ColorModeSwitcher />
                    <IconButton
                        variant="ghost"
                        icon={<FaBars />}
                        onClick={onOpen}
                        aria-label="Toggle navbar drawer"
                        {...props}
                    />
                </Flex>
                <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Flex justifyContent="center">
                                <Text>Navigation</Text>
                            </Flex>
                        </DrawerHeader>
                        <Divider />
                        <DrawerBody>
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                                rowGap="8px"
                            >
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
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Flex>
    );
};
