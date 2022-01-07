export interface IShowObject {
    name: string,
    summary: string,
    image: {
        original: string
    }
}

export interface SeasonsObject {
    seasons: [
        season: SeasonObject
    ]
}

export type SeasonObject = {
    season: {
        id: number
    }
}