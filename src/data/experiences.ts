import { Tag, tags } from './tags';

export interface Experience {
    title: string;
    company: string;
    companyLink: string;
    date: string;
    highlights: string[];
    tags: Tag[];
}

export const experiences: Experience[] = [
    {
        title: 'Software Engineer',
        company: 'OIA Global',
        companyLink: 'https://www.oiaglobal.com/en/',
        date: 'Oct 2022 - Present',
        highlights: [],
        tags: [
            tags['typescript'],
            tags['angular'],
            tags['csharp'],
            tags['dotnet'],
            tags['sqlserver'],
            tags['azure'],
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Bright.md',
        companyLink: 'https://bright.md/',
        date: 'Jul 2021 - Sep 2021',
        highlights: [
            'Developed user interface features for Navigate, a web application for guiding healthcare patients to optimal care options, using JavaScript and React',
            'Collaborated with engineers, designers, and product managers on a cross-functional product team',
            'Created reusable React components for the Bright UI design system using Storybook',
            'Wrote integration tests and end-to-end tests to improve test coverage using Jest and Cypress',
        ],
        tags: [
            tags['javascript'],
            tags['react'],
            tags['storybook'],
            tags['jest'],
            tags['cypress'],
        ],
    },
];
