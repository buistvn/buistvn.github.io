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
        name: 'Game Collection',
        description:
            'Game Collection is a mobile app for browsing video games using data provided by the RAWG API. Users can find information on games such as ratings, developers, stores, screenshots, and trailers. While searching for games, users can narrow down their results by configuring the filters in the settings. The app has a local database which allows users to save games by favoriting them.',
        tags: [tags['kotlin'], tags['androidstudio']],
        image: '/game-collection.png',
        repoLink: 'https://github.com/osu-cs492-w22/game-collection',
        demoLink: undefined,
    },
    {
        name: 'MUVI',
        description:
            'MUVI is a web app for discovering movies using data provided by the TMDB API. Users can browse for movies by searching or filtering through categories such as Popular, Top Rated, and Now Playing. Login for TMDB accounts is supported with third party authentication. After logging in, users will have access to managing their favorites and watchlist.',
        tags: [tags['javascript'], tags['nextjs'], tags['chakraui']],
        image: '/muvi.png',
        repoLink: 'https://github.com/osu-cs499-w22/muvi',
        demoLink: undefined,
    },
];
