export interface Person {
    name: string,
    eye_color: string,
    hair_color: string,
    skin_color: string,
    birth_year: string,
    specie?: string,
    planet?: string,
    slug: string
}

export interface ContextValues {
    loading?: boolean,
    error?: string,
    data?: Person[],
    getInfo?: () => void,
    getCharacterInfo?: (slug: string) => void,
}