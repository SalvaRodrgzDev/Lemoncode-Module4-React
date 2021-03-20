export interface CharacterEntity {
    id: number,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    type: string,
    gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
    origin: {
        name: string,
        url: string
    },
    location: Location
    image: string,
    episode: string[],
    url: string,
    created: string
}