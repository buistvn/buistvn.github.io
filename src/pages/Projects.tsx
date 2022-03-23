import { Flex, Heading } from '@chakra-ui/react';

import { ProjectList } from '../components/ProjectList';
import { projects } from '../data/projects';

export const Projects = () => {
    return (
        <Flex justifyContent="center" marginY="32px">
            <Flex
                flexDirection="column"
                alignItems="center"
                rowGap="32px"
                width="75%"
            >
                <Heading>Projects</Heading>
                <ProjectList projects={projects} />
            </Flex>
        </Flex>
    );
};
