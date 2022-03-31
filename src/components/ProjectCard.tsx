import {
    AspectRatio,
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
    useMediaQuery,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { ProjectPlaceholder } from './ProjectPlaceholder';
import { Project } from '../data/projects';

type ProjectCardProps = {
    project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const backgroundColor = useColorModeValue('white', 'gray.900');
    const iconColor = useColorModeValue('green.500', 'green.200');
    const textColor = useColorModeValue('gray.500', 'gray.400');

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

    if (isLargerThan1200) {
        return (
            <Box position="relative">
                <AspectRatio ratio={16 / 9} width="80%">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fallback={<ProjectPlaceholder />}
                        border="1px"
                        borderColor={borderColor}
                        borderRadius="16px"
                        boxShadow="md"
                    />
                </AspectRatio>
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
                    borderRadius="16px"
                    boxShadow="md"
                    backgroundColor={backgroundColor}
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize="36px">{project.name}</Heading>
                        <Flex alignItems="center" columnGap="16px">
                            {project.repoLink && (
                                <Link
                                    href={project.repoLink}
                                    isExternal
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
                                    isExternal
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
                    <Flex flexWrap="wrap" gap="8px">
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
    } else {
        return (
            <Flex
                flexDir="column"
                alignItems="center"
                border="1px"
                borderColor={borderColor}
                borderRadius="16px"
                boxShadow="md"
            >
                <AspectRatio ratio={16 / 9} width="100%">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fallback={<ProjectPlaceholder />}
                        borderTopRadius="16px"
                    />
                </AspectRatio>
                <Flex
                    flexDirection="column"
                    rowGap="8px"
                    width="100%"
                    padding={['16px', '16px', '24px', '24px']}
                    borderBottomRadius="16px"
                    backgroundColor={backgroundColor}
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading fontSize={['24px', '24px', '36px', '36px']}>
                            {project.name}
                        </Heading>
                        <Flex alignItems="center" columnGap="16px">
                            {project.repoLink && (
                                <Link
                                    href={project.repoLink}
                                    isExternal
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
                                    isExternal
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
                    <Flex flexWrap="wrap" gap="8px">
                        {project.tags.map((tag) => (
                            <Tag
                                size={isLargerThan768 ? 'md' : 'sm'}
                                colorScheme={tag.color}
                                key={tag.name}
                            >
                                <TagLeftIcon as={tag.icon} />
                                <TagLabel>{tag.name}</TagLabel>
                            </Tag>
                        ))}
                    </Flex>
                    <Divider />
                    <Text color={textColor}>{project.description}</Text>
                </Flex>
            </Flex>
        );
    }
};
