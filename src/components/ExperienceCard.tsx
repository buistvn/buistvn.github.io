import {
    Box,
    Divider,
    Flex,
    Link,
    ListItem,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
    UnorderedList,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';

import { Experience } from '../data/experiences';

type ExperienceCardProps = {
    experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const linkColor = useColorModeValue('green.500', 'green.200');
    const textColor = useColorModeValue('gray.500', 'gray.400');

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            flexDirection="column"
            rowGap="8px"
            padding={['16px', '16px', '24px', '24px']}
            border="1px"
            borderColor={borderColor}
            borderRadius="16px"
            boxShadow="md"
        >
            <Box>
                <Text fontSize="18px" fontWeight="500">
                    {experience.title}
                </Text>
                <Text>
                    <Link
                        href={experience.companyLink}
                        isExternal
                        color={linkColor}
                    >
                        {experience.company}
                    </Link>
                </Text>
                <Text>{experience.date}</Text>
            </Box>
            <Divider />
            <Flex flexWrap="wrap" gap="8px">
                {experience.tags.map((tag) => (
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
            <UnorderedList spacing={1}>
                {experience.highlights.map((highlight) => (
                    <ListItem color={textColor}>{highlight}</ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
};
