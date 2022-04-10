import { Button, Flex, Link, useMediaQuery } from '@chakra-ui/react';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export const LinkList = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            justifyContent={['center', 'center', 'flex-start', 'flex-start']}
            flexWrap="wrap"
            gap="16px"
        >
            <Button
                as={Link}
                href="https://www.linkedin.com/in/buistvn"
                isExternal
                size={isLargerThan768 ? 'md' : 'sm'}
                colorScheme="green"
                leftIcon={<FaLinkedin />}
            >
                LinkedIn
            </Button>
            <Button
                as={Link}
                href="https://github.com/buistvn"
                isExternal
                size={isLargerThan768 ? 'md' : 'sm'}
                colorScheme="green"
                leftIcon={<FaGithub />}
            >
                GitHub
            </Button>
            <Button
                as={Link}
                href="mailto:bui.stvn@gmail.com"
                isExternal
                size={isLargerThan768 ? 'md' : 'sm'}
                colorScheme="green"
                leftIcon={<FaEnvelope />}
            >
                Email
            </Button>
            <Button
                as={Link}
                href="/StevenBuiResume.pdf"
                isExternal
                size={isLargerThan768 ? 'md' : 'sm'}
                colorScheme="green"
                leftIcon={<FaFileAlt />}
            >
                Resume
            </Button>
        </Flex>
    );
};
