import { IconType } from 'react-icons';
import { GrMysql } from 'react-icons/gr';
import {
    SiAngular,
    SiChakraui,
    SiCplusplus,
    SiCsharp,
    SiCypress,
    SiDocker,
    SiDotnet,
    SiExpress,
    SiJavascript,
    SiJest,
    SiJsonwebtokens,
    SiKotlin,
    SiMicrosoftazure,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiNextdotjs,
    SiOpengl,
    SiPython,
    SiReact,
    SiRedis,
    SiSequelize,
    SiStorybook,
    SiTypescript,
} from 'react-icons/si';

export interface Tag {
    name: string;
    color: string;
    icon: IconType;
}

export const tags: Record<string, Tag> = {
    angular: {
        name: 'Angular',
        color: 'red',
        icon: SiAngular,
    },
    azure: {
        name: 'Azure',
        color: 'blue',
        icon: SiMicrosoftazure,
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
    csharp: {
        name: 'C#',
        color: 'green',
        icon: SiCsharp,
    },
    cypress: {
        name: 'Cypress',
        color: 'gray',
        icon: SiCypress,
    },
    docker: {
        name: 'Docker',
        color: 'blue',
        icon: SiDocker,
    },
    dotnet: {
        name: '.NET',
        color: 'purple',
        icon: SiDotnet,
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
    jest: {
        name: 'Jest',
        color: 'red',
        icon: SiJest,
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
    sqlserver: {
        name: 'SQL Server',
        color: 'red',
        icon: SiMicrosoftsqlserver,
    },
    storybook: {
        name: 'Storybook',
        color: 'pink',
        icon: SiStorybook,
    },
    typescript: {
        name: 'TypeScript',
        color: 'blue',
        icon: SiTypescript,
    },
};
