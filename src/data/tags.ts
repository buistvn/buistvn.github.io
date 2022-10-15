import { IconType } from 'react-icons';
import { GrMysql } from 'react-icons/gr';
import {
    SiChakraui,
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiJavascript,
    SiJsonwebtokens,
    SiKotlin,
    SiMongodb,
    SiNextdotjs,
    SiOpengl,
    SiPython,
    SiReact,
    SiRedis,
    SiSequelize,
    SiTypescript,
} from 'react-icons/si';

export interface Tag {
    name: string;
    color: string;
    icon: IconType;
}

export const tags: Record<string, Tag> = {
    chakraui: {
        name: 'Chakra UI',
        color: 'teal',
        icon: SiChakraui,
    },
    cplusplus: {
        name: 'C++',
        color: 'pink',
        icon: SiCplusplus,
    },
    docker: {
        name: 'Docker',
        color: 'blue',
        icon: SiDocker,
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
    jsonwebtokens: {
        name: 'JSON Web Tokens',
        color: 'gray',
        icon: SiJsonwebtokens,
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
    opengl: {
        name: 'OpenGL',
        color: 'blue',
        icon: SiOpengl,
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
    redis: {
        name: 'Redis',
        color: 'red',
        icon: SiRedis,
    },
    sequelize: {
        name: 'Sequelize',
        color: 'blue',
        icon: SiSequelize,
    },
    typescript: {
        name: 'TypeScript',
        color: 'blue',
        icon: SiTypescript,
    },
};
