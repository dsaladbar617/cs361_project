export type teamStanding = {
    conferenceName: string;
    divisionName: string;
    gamesPlayed: string;
    wins: number;
    losses: number;
    ties: number;
    otLosses: number;
    leagueSequence: number;
    points: number;
    teamName: teamName
}

type teamName = {
    "fr": string,
    "default": string
}

export type NHLNewsType = {
    description: string;
    headline:    string;
    links:       Links;
    dataSourceIdentifier: string;
}

type Links = {
    web: Web;
    api: API;
}

type API = {
    news: Web;
}

type Web = {
    href: string;
}