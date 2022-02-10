type movie = {
    id: number
    title: string
    year: number
}

enum GENDER {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

const movies : movie[] = [
    {
        id: 1,
        title: 'X-Men',
        year: 2000
    }
]

type character = {
    id: number
    name: string
    gender: GENDER
}

const characters : character[] = [
    {
        id: 1,
        name: 'Storm',
        gender: GENDER.FEMALE
    }
]

console.log(characters[0].name)