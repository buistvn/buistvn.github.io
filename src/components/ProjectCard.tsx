import {
    Flex,
    Grid,
    Heading,
    Icon,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { Project } from '../data/projects';

type ProjectCardProps = {
    project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const backgroundColor = useColorModeValue('white', 'gray.900');

    return (
        <Grid>
            <Flex
                flexDirection="column"
                rowGap="8px"
                padding="16px"
                border="1px"
                borderColor={borderColor}
                borderRadius="8px"
                backgroundColor={backgroundColor}
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading>{project.name}</Heading>
                    <Flex alignItems="center">
                        {project.repoLink && (
                            <Link href={project.repoLink}>
                                <Icon
                                    as={FaGithub}
                                    width="30px"
                                    height="30px"
                                />
                            </Link>
                        )}
                        {project.demoLink && (
                            <Link href={project.demoLink}>
                                <Icon
                                    as={FaExternalLinkAlt}
                                    width="30px"
                                    height="30px"
                                />
                            </Link>
                        )}
                    </Flex>
                </Flex>
                <Text>{project.description}</Text>
            </Flex>
        </Grid>
    );
};
