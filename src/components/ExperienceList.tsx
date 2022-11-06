import { Flex } from '@chakra-ui/react';

import { ExperienceCard } from './ExperienceCard';
import { Experience } from '../data/experiences';

type ExperienceListProps = {
    experiences: Experience[];
};

export const ExperienceList = ({ experiences }: ExperienceListProps) => {
    return (
        <Flex flexDirection="column" rowGap="32px">
            {experiences.map((experience) => (
                <ExperienceCard
                    experience={experience}
                    key={experience.company}
                />
            ))}
        </Flex>
    );
};
