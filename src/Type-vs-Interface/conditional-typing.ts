

// type Exclude<T, U> = T extends U ? never : T;

interface AnotherVillain {
    name: string;
    age: number;
    worldDesctructionPlan: string;
}

interface AnotherHero {
    name: string;
    age: number;
    superpower: string;
}

// type VillainUniqueKey = Exclude<keyof AnotherVillain, keyof AnotherHero>

type VillainUniqueKey = Exclude<
    "name" | "evilPlan" | "weapon", 
    "name" | "superPower"
>


const updateVillainKey = (key: VillainUniqueKey, value: string) => {
    dispatch({
        type: UPDATE_VILLAIN,
        payload: {
            key,
            value
        }
    })
};

updateVillainKey('evilPlan', 'kill hero!')
updateVillainKey('name', 'kill hero!')

const anotherVillainUniqueKey: Exclude<keyof AnotherVillain, keyof AnotherHero> = "worldDesctructionPlan"

