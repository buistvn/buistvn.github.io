import {
    Box,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Tag,
    TagLabel,
    TagLeftIcon,
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
    const iconColor = useColorModeValue('teal.500', 'teal.300');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box position="relative">
            <Image
                src={project.image}
                width="80%"
                border="1px"
                borderColor={borderColor}
                borderRadius="8px"
                boxShadow="md"
            />
            <Flex
                flexDirection="column"
                rowGap="8px"
                position="absolute"
                top="50%"
                right="0%"
                transform="translate(0%, -50%)"
                width="40%"
                padding="24px"
                border="1px"
                borderColor={borderColor}
                borderRadius="8px"
                boxShadow="md"
                backgroundColor={backgroundColor}
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading>{project.name}</Heading>
                    <Flex alignItems="center" columnGap="16px">
                        {project.repoLink && (
                            <Link
                                href={project.repoLink}
                                width="24px"
                                height="24px"
                            >
                                <Icon
                                    as={FaGithub}
                                    width="100%"
                                    height="100%"
                                    _hover={{ color: iconColor }}
                                />
                            </Link>
                        )}
                        {project.demoLink && (
                            <Link
                                href={project.demoLink}
                                width="24px"
                                height="24px"
                            >
                                <Icon
                                    as={FaExternalLinkAlt}
                                    width="100%"
                                    height="100%"
                                    _hover={{ color: iconColor }}
                                />
                            </Link>
                        )}
                    </Flex>
                </Flex>
                <Flex columnGap="8px">
                    {project.tags.map((tag) => (
                        <Tag colorScheme={tag.color} key={tag.name}>
                            <TagLeftIcon as={tag.icon} />
                            <TagLabel>{tag.name}</TagLabel>
                        </Tag>
                    ))}
                </Flex>
                <Divider />
                <Text color={textColor}>{project.description}</Text>
            </Flex>
        </Box>
    );
};
