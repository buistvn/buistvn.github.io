import { IconType } from 'react-icons';
import { GrMysql } from 'react-icons/gr';
import {
    SiAndroid,
    SiChakraui,
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiJavascript,
    SiJsonwebtokens,
    SiKotlin,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
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
    jsonwebtoken: {
        name: 'JSON Web Token',
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
    nodejs: {
        name: 'Node.js',
        color: 'green',
        icon: SiNodedotjs,
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
