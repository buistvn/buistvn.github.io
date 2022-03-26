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
    useMediaQuery,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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

    return (
        <Box position="relative">
            <Image
                src={project.image}
                width={['100%', '100%', '100%', '100%', '80%']}
                border="1px"
                borderColor={borderColor}
                borderTopRadius="16px"
                borderBottomRadius={['0px', '0px', '0px', '0px', '16px']}
                boxShadow="md"
            />
            <Flex
                flexDirection="column"
                rowGap="8px"
                position={['static', 'static', 'static', 'static', 'absolute']}
                top={['100%', '100%', '100%', '100%', '50%']}
                right="0%"
                transform={[
                    'none',
                    'none',
                    'none',
                    'none',
                    'translate(0%, -50%)',
                ]}
                width={['100%', '100%', '100%', '100%', '40%']}
                padding={['16px', '16px', '24px', '24px', '24px']}
                border="1px"
                borderColor={borderColor}
                borderTopRadius={['0px', '0px', '0px', '0px', '16px']}
                borderBottomRadius="16px"
                boxShadow="md"
                backgroundColor={backgroundColor}
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading
                        fontSize={['24px', '24px', '36px', '36px', '36px']}
                    >
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
        </Box>
    );
};
