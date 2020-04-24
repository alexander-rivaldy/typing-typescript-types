
type generic<T> = {
    genericKey: T
}

const stuff: generic<string> = {
    genericKey: ''
}

interface Interface_Generic<T> {
    genericKey: T
}

const another: Interface_Generic<string> = {
    genericKey: ''
}

function thisIsAFunction<T>(another: generic<T> ): T {
    return another.genericKey;
}


const a = 5 + '6' + {} ;

console.log(typeof(a), a)


type Without<T, U> = Pick<T, Exclude<keyof T, U>>;


enum PetKey { 
    SPECIES = 'species',
    NAME = 'name',
    OWNER = 'owner',
    AGE = 'age'
}

type TPet = {
    [key in PetKey]: string | number
}

type TWildAnimal = Without<Pet, 'owner'> & {
    isExtinct: boolean;
};

const tPet: TPet = {
    species: '',
    name: '',
    owner: '',
    age: 1
}
const tWildAnimal: TWildAnimal = {
    species: '',
    name: '',
    age: 1,
    isExtinct: true
}


type Pet = {
    species: string;
    name: string;
    owner: string;
    age: number;
}


const pet: Pet = {
    species: '',
    name: '',
    owner: '',
    age: 0
}

type WildAnimal = Without<Pet, 'owner'> & {
    isExtinct: boolean;
};

const wild: WildAnimal = {
    species: '',
    name: '',
    age: 0,
    isExtinct: false
}



type stuff = Exclude<keyof Pet, 'species'>

const variable: stuff = 'name';