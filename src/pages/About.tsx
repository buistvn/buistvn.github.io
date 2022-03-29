import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

import profile from '../assets/profile.jpg';

export const About = () => {
    const linkColor = useColorModeValue('green.500', 'green.200');
    const placeholderColor = useColorModeValue('gray.100', 'gray.800');

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex justifyContent="center" marginY="64px">
            <Flex
                flexDirection="column"
                rowGap={['32px', '32px', '64px', '64px']}
                width={['95%', '95%', '85%', '75%']}
            >
                <Flex flexDirection="column" rowGap="16px">
                    <Heading fontSize={['36px', '36px', '48px', '48px']}>
                        About Me
                    </Heading>
                    <Flex
                        flexDirection={['column', 'column', 'row', 'row']}
                        alignItems="center"
                        gap={['32px', '32px', '64px', '64px']}
                    >
                        <Text fontSize={['16px', '16px', '18px', '20px']}>
                            Hi, my name is Steven. I'm currently a fourth year
                            student at Oregon State University majoring in
                            Computer Science.
                            <br />
                            <br />
                            During my undergraduate education at OSU, I worked
                            on projects and took a variety of courses to explore
                            the different fields in Computer Science. I spent
                            the summer of 2021 as a{' '}
                            <Link
                                href="https://bright.md/blog/where-software-healthcare-meet-reflections-from-bright-mds-summer-engineering-intern"
                                isExternal
                                color={linkColor}
                            >
                                Software Engineering Intern at Bright.md
                            </Link>{' '}
                            which taught me a lot about the world of software
                            and tech. I'm interested in cloud app development,
                            web development, and operating systems.
                            <br />
                            <br />
                            In my free time, I enjoy watching movies, learning
                            about history, playing games, and discovering new
                            music to listen to.
                        </Text>
                        <Image
                            src={profile}
                            alt="Steven Bui"
                            fallback={
                                <Box
                                    minWidth="256px"
                                    minHeight="256px"
                                    borderRadius="full"
                                    backgroundColor={placeholderColor}
                                />
                            }
                            boxSize="256px"
                            borderRadius="full"
                        />
                    </Flex>
                </Flex>
                <Divider />
                <Flex flexDirection="column" rowGap="16px">
                    <Heading fontSize={['36px', '36px', '48px', '48px']}>
                        Contact
                    </Heading>
                    <Flex
                        flexDirection={['column', 'row', 'row', 'row']}
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
                </Flex>
            </Flex>
        </Flex>
    );
};
