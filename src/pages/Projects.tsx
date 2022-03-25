import { Divider, Flex, Heading, Text } from '@chakra-ui/react';

import { ProjectList } from '../components/ProjectList';
import { projects } from '../data/projects';

export const Projects = () => {
    return (
        <Flex justifyContent="center" marginY="64px">
            <Flex
                flexDirection="column"
                rowGap={['32px', '32px', '64px', '64px']}
                width={['95%', '95%', '85%', '75%']}
            >
                <Flex flexDirection="column" rowGap="16px">
                    <Heading fontSize={['36px', '36px', '48px', '48px']}>
                        Projects
                    </Heading>
                    <Text fontSize={['16px', '16px', '18px', '20px']}>
                        You can check out what I've been working on below.
                    </Text>
                </Flex>
                <Divider />
                <ProjectList projects={projects} />
            </Flex>
        </Flex>
    );
};
