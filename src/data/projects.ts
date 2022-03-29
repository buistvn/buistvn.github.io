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
    /*
    {
        name: "",
        description: "",
        tags: [],
        image : "",
        repoLink: "",
        demoLink: "",
    },
    */
    {
        name: 'ML Tower Defense',
        description: 'Senior Capstone project',
        tags: [tags['csharp'], tags['unity']],
        image: '/ml-tower-defense.png',
        repoLink: 'https://github.com/ML-Tower-Defense/capstone',
        demoLink: undefined,
    },
    {
        name: 'Game Collection',
        description:
            'A mobile app that lets users browse video games and manage their game collections',
        tags: [tags['kotlin'], tags['androidstudio']],
        image: 'https://raw.githubusercontent.com/buistvn/game-collection/main/docs/game-collection.png',
        repoLink: 'https://github.com/buistvn/game-collection',
        demoLink: undefined,
    },
    {
        name: 'MUVI',
        description:
            'A web app that lets users discover movies and keep track of their favorites and watchlists',
        tags: [tags['javascript'], tags['nextjs'], tags['chakraui']],
        image: 'https://raw.githubusercontent.com/buistvn/muvi/main/docs/muvi.png',
        repoLink: 'https://github.com/buistvn/muvi',
        demoLink: undefined,
    },
    {
        name: 'Lainavi',
        description:
            'A Discord bot that features commands for moderation, alerts, and gaming',
        tags: [tags['javascript']],
        image: 'https://raw.githubusercontent.com/buistvn/lainavi/main/docs/lainavi.png',
        repoLink: 'https://github.com/buistvn/lainavi',
        demoLink: undefined,
    },
    {
        name: 'stevenbui.dev',
        description:
            "A personal website that showcases the projects I've been working on",
        tags: [tags['typescript'], tags['react'], tags['chakraui']],
        image: 'https://raw.githubusercontent.com/buistvn/stevenbui.dev/main/docs/portfolio.png',
        repoLink: 'https://github.com/buistvn/stevenbui.dev',
        demoLink: 'https://stevenbui.dev',
    },
    {
        name: 'CLOUDVOTE',
        description:
            'A web app that lets users create proposals for topics that they care about',
        tags: [
            tags['javascript'],
            tags['react'],
            tags['express'],
            tags['mongodb'],
        ],
        image: 'https://raw.githubusercontent.com/buistvn/cloudvote/main/docs/cloudvote.png',
        repoLink: 'https://github.com/buistvn/cloudvote',
        demoLink: undefined,
    },
];
