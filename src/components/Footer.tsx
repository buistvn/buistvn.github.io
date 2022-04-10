import { Divider, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <Flex flexDirection="column" width={['95%', '95%', '85%', '75%']}>
            <Divider />
            <Flex
                justifyContent="space-between"
                alignItems="center"
                paddingY="16px"
            >
                <Text fontSize={['14px', '14px', '16px', '16px']}>
                    © 2022 Steven Bui
                </Text>
                <Flex columnGap="16px">
                    <IconButton
                        as={Link}
                        href="https://www.linkedin.com/in/buistvn"
                        isExternal
                        variant="ghost"
                        icon={<FaLinkedin />}
                        aria-label="Link to LinkedIn"
                    />
                    <IconButton
                        as={Link}
                        href="https://github.com/buistvn"
                        isExternal
                        variant="ghost"
                        icon={<FaGithub />}
                        aria-label="Link to GitHub"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
