enum GENDER {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

export type character = {
    id: number
    name: string
    gender: GENDER
    description: any
}

export type movie = {
    id: number
    title: string
    year: number
}