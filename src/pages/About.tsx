import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import profile from '../assets/profile.jpg';
import { ExperienceList } from '../components/ExperienceList';
import { Footer } from '../components/Footer';
import { LinkList } from '../components/LinkList';
import { experiences } from '../data/experiences';

export const About = () => {
    const placeholderColor = useColorModeValue('gray.100', 'gray.800');

    return (
        <Flex flexDirection="column" alignItems="center">
            <Flex
                flexDirection="column"
                rowGap={['32px', '32px', '64px', '64px']}
                width={['95%', '95%', '85%', '75%']}
                marginY="64px"
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
                            Hi, my name is Steven. I graduated from Oregon State
                            University in 2022 where I majored in Computer
                            Science with a concentration in Computer Systems.
                            I'm currently a Software Engineer on the OptiLink
                            team at OIA Global.
                            <br />
                            <br />
                            During my undergraduate education at OSU, I took on
                            a variety of courses and projects to explore the
                            different fields of Computer Science. Overall, I'm
                            interested in working with cloud application
                            development, web development, and DevOps.
                            <br />
                            <br />
                            In my free time, my interests include film, history,
                            music, design, and video games.
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
                    <LinkList />
                </Flex>
                <Flex flexDirection="column" rowGap="16px">
                    <Heading fontSize={['36px', '36px', '48px', '48px']}>
                        Experience
                    </Heading>
                    <ExperienceList experiences={experiences} />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};
