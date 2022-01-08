export interface IEpisode {
    id: number,
    name?: string,
    number?: number,
    image?: {
        medium?: string,
        original?: string,
    },
    season?: string,
    runtime?: number,
    airdate?: string,
    summary: string
}

export interface ISeason {
    id: number,
    number: number
}


export interface IShowObject {
    id: number,
    url?: string,
    name?: string,
    type?: string,
    language?: string,
    genres?: string[],
    status?: string,
    runtime?: number,
    averageRuntime?: number,
    premiered?: string,
    ended?: string,
    officialSite?: any,
    schedule?: IShowSchedule,
    rating?: IShowRating,
    weight?: number,
    network?: IShowNetwork,
    webChannel?: any,
    dvdCountry?: any,
    externals?: IShowExternals,
    image?: IShowImage,
    summary: string,
    updated?: number,
    _links?: IShowLinks
}

export interface IShowNetwork {
    id: 11,
    name: string,
    country: IShowCountry
}

export interface IShowCountry {
    name: string
    code: string,
    timezone: string
}

export interface IShowRating {
    average: number
}

export interface IShowSchedule {
    time: string,
    days: string[]
}

export interface IShowExternals {
    tvrage: number,
    thetvdb: number,
    imdb: string
}

export interface IShowImage {
    medium?: string,
    original?: string
}

export interface IShowLinks {
    self: {
        href: string
    },
    previousepisode: {
        href: string
    }
}
