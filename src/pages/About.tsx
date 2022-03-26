import {
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
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const About = () => {
    const linkColor = useColorModeValue('green.500', 'green.200');

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
                            the different fields of Computer Science. I spent
                            the summer of 2021 working as a{' '}
                            <Link
                                href="https://bright.md/blog/where-software-healthcare-meet-reflections-from-bright-mds-summer-engineering-intern"
                                isExternal
                                color={linkColor}
                            >
                                Software Engineering Intern at Bright.md
                            </Link>{' '}
                            where I gained experience in web development. I'm
                            also interested in cloud app development, operating
                            systems, and game development.
                            <br />
                            <br />
                            In my free time, I enjoy watching movies, playing
                            strategy games, learning piano, and discovering new
                            music.
                        </Text>
                        <Image
                            src="/profile.jpg"
                            alt="profile"
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
                        {/*
                        <Button
                            as={Link}
                            href=""
                            isExternal
                            size={isLargerThan768 ? 'md' : 'sm'}
                            colorScheme="green"
                            leftIcon={<FaFileAlt />}
                        >
                            Resume
                        </Button>
                        */}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
