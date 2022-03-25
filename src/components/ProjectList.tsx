import { Flex } from '@chakra-ui/react';

import { ProjectCard } from './ProjectCard';
import { Project } from '../data/projects';

type ProjectListProps = {
    projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <Flex flexDirection="column" rowGap={['32px', '32px', '64px', '64px']}>
            {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
            ))}
        </Flex>
    );
};
