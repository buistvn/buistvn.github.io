import { IconType } from 'react-icons';
import { GrMysql } from 'react-icons/gr';
import {
    SiAndroid,
    SiChakraui,
    SiCsharp,
    SiExpress,
    SiJavascript,
    SiKotlin,
    SiMongodb,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiTypescript,
    SiUnity,
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
    csharp: {
        name: 'C#',
        color: 'green',
        icon: SiCsharp,
    },
    express: {
        name: 'Express',
        color: 'gray',
        icon: SiExpress,
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
    mongodb: {
        name: 'MongoDB',
        color: 'green',
        icon: SiMongodb,
    },
    mysql: {
        name: 'MySQL',
        color: 'blue',
        icon: GrMysql,
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
    unity: {
        name: 'Unity',
        color: 'gray',
        icon: SiUnity,
    },
};
