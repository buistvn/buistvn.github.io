import { IconType } from 'react-icons';
import {
    SiAndroid,
    SiChakraui,
    SiDiscord,
    SiJavascript,
    SiKotlin,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiTypescript,
} from 'react-icons/si';

export interface Tag {
    name: string;
    color: string;
    icon: IconType;
}

export const tags: Record<string, Tag> = {
    androidstudio: {
        name: 'Android Studio',
        color: 'green',
        icon: SiAndroid,
    },
    chakraui: {
        name: 'Chakra UI',
        color: 'teal',
        icon: SiChakraui,
    },
    discordjs: {
        name: 'discord.js',
        color: 'blue',
        icon: SiDiscord,
    },
    javascript: {
        name: 'JavaScript',
        color: 'yellow',
        icon: SiJavascript,
    },
    kotlin: {
        name: 'Kotlin',
        color: 'purple',
        icon: SiKotlin,
    },
    nextjs: {
        name: 'Next.js',
        color: 'gray',
        icon: SiNextdotjs,
    },
    python: {
        name: 'Python',
        color: 'blue',
        icon: SiPython,
    },
    react: {
        name: 'React',
        color: 'blue',
        icon: SiReact,
    },
    typescript: {
        name: 'TypeScript',
        color: 'blue',
        icon: SiTypescript,
    },
};
