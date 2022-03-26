import { Tag, tags } from './tags';

export interface Project {
    name: string;
    description: string;
    tags: Tag[];
    image: string;
    repoLink: string;
    demoLink?: string;
}

export const projects: Project[] = [
    {
        name: 'Portfolio',
        description:
            "A personal website that showcases the projects I've been working on",
        tags: [tags['typescript'], tags['react'], tags['chakraui']],
        image: '/portfolio.png',
        repoLink: 'https://github.com/buistvn/buistvn.github.io',
        demoLink: 'https://buistvn.github.io',
    },
    {
        name: 'Game Collection',
        description:
            'A mobile app that lets users browse video games and manage their game collections',
        tags: [tags['kotlin'], tags['androidstudio']],
        image: '/game-collection.png',
        repoLink: 'https://github.com/osu-cs492-w22/game-collection',
        demoLink: undefined,
    },
    {
        name: 'MUVI',
        description:
            'A web app that lets users discover movies and keep track of their favorites and watchlists',
        tags: [tags['javascript'], tags['nextjs'], tags['chakraui']],
        image: '/muvi.png',
        repoLink: 'https://github.com/osu-cs499-w22/muvi',
        demoLink: undefined,
    },
];
