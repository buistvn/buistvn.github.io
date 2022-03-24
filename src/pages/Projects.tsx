import { Flex, Heading } from '@chakra-ui/react';

import { ProjectList } from '../components/ProjectList';
import { projects } from '../data/projects';

export const Projects = () => {
    return (
        <Flex justifyContent="center" marginY="64px">
            <Flex
                flexDirection="column"
                alignItems="center"
                rowGap="64px"
                width="75%"
            >
                <Heading>Projects</Heading>
                <ProjectList projects={projects} />
            </Flex>
        </Flex>
    );
};
