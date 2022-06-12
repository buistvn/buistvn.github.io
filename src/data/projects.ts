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
        name: 'Tarpaulin',
        description:
            'A RESTful API that stores and provides data for a learning management system',
        tags: [
            tags['javascript'],
            tags['express'],
            tags['docker'],
            tags['mysql'],
            tags['redis'],
            tags['sequelize'],
            tags['jsonwebtoken'],
        ],
        image: 'https://raw.githubusercontent.com/buistvn/tarpaulin/main/docs/tarpaulin.png',
        repoLink: 'https://github.com/buistvn/tarpaulin',
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
        tags: [
            tags['javascript'],
            tags['react'],
            tags['nextjs'],
            tags['chakraui'],
        ],
        image: 'https://raw.githubusercontent.com/buistvn/muvi/main/docs/muvi.png',
        repoLink: 'https://github.com/buistvn/muvi',
        demoLink: undefined,
    },
    {
        name: 'Solar Sim',
        description:
            'A 3D simulator that displays an interactive model of the solar system',
        tags: [tags['cplusplus'], tags['opengl']],
        image: 'https://raw.githubusercontent.com/buistvn/solar-sim/main/docs/solar-sim.png',
        repoLink: 'https://github.com/buistvn/solar-sim',
        demoLink: undefined,
    },
    {
        name: 'IMDb Scraper',
        description: 'A script that extracts and stores movie data from IMDb',
        tags: [tags['python'], tags['mysql']],
        image: 'https://raw.githubusercontent.com/buistvn/imdb-scraper/main/docs/imdb-scraper.png',
        repoLink: 'https://github.com/buistvn/imdb-scraper',
        demoLink: undefined,
    },
    {
        name: 'Lainavi',
        description:
            'A Discord bot that features commands for moderation, alerts, and gaming',
        tags: [tags['javascript'], tags['nodejs']],
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
            tags['jsonwebtoken'],
        ],
        image: 'https://raw.githubusercontent.com/buistvn/cloudvote/main/docs/cloudvote.png',
        repoLink: 'https://github.com/buistvn/cloudvote',
        demoLink: undefined,
    },
];
