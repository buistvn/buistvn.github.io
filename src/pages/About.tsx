import {
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Link,
    Text,
} from '@chakra-ui/react';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export const About = () => {
    return (
        <Flex justifyContent="center" marginY="64px">
            <Flex flexDirection="column" rowGap="64px" width="75%">
                <Flex flexDirection="column" rowGap="16px">
                    <Heading fontSize="48px">About Me</Heading>
                    <Flex alignItems="center" columnGap="64px">
                        <Text fontSize="20px">
                            Hi, I'm Steven. I'm currently a fourth year student
                            at Oregon State University majoring in Computer
                            Science.
                            <br />
                            <br />
                            During my undergraduate education at OSU, I worked
                            on projects and took a variety of courses to explore
                            the different fields in Computer Science. I spent
                            the summer of 2021 as a Software Engineering Intern
                            at Bright.md where I gained experience in web
                            development. I'm also interested in cloud app
                            development, operating systems, and game
                            development.
                            <br />
                            <br />
                            In my free time, I enjoy watching films, playing
                            video games, learning piano, and discovering new
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
                    <Heading fontSize="48px">Contact</Heading>
                    <Flex columnGap="16px">
                        <Button
                            as={Link}
                            href="https://www.linkedin.com/in/buistvn/"
                            colorScheme="green"
                            leftIcon={<FaLinkedin />}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            as={Link}
                            href="https://github.com/buistvn"
                            colorScheme="green"
                            leftIcon={<FaGithub />}
                        >
                            GitHub
                        </Button>
                        <Button
                            as={Link}
                            href="mailto:bui.stvn@gmail.com"
                            colorScheme="green"
                            leftIcon={<FaEnvelope />}
                        >
                            Email
                        </Button>
                        {/*
                        <Button
                            as={Link}
                            href=""
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
