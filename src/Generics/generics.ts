

interface Pet {
    name: string;
    feed(): void;
    isFull: boolean;
}

interface Dog extends Pet {
    goForAWalk(): void;
}

interface Horse extends Pet {
    putOnSaddle(): void;
}

interface Car {
    model: string;
}

interface PeopleWithPet<T extends Pet> {
    fullName: string;
    pet: T;
}

const jockey: PeopleWithPet<Horse> = {
    fullName: '',
    isFull: false,
    pet: {
        name: '',
        feed: () => {},
        putOnSaddle: () => {}
    }
}

const feedYourPet = (pet: Pet): void => {
    if(!pet.isFull)
        pet.feed;
}