

// type Fish = {
//     livesInRiver: boolean;
// }

// type Bug = {
//     spawnsOnTrees: boolean;
// }

// type CaughtAnimal = (Fish | Bug) & { caught: boolean; }

// const seaBass: CaughtAnimal = {
//     livesInRiver: false,
//     caught: true
// }

// const moth: CaughtAnimal = {
//     spawnsOnTrees: false,
//     caught: false
// }

interface Fish {
    livesInRiver: boolean;
}

interface Bug {
    spawnsOnTrees: boolean;
}

interface ICaughtAnimal {
    [type: string]: (Fish | Bug) & { caught: boolean};
}

interface CaughtAnimal<T> extends T {
    caught: boolean;
}

const ICaughtAnimal: ICaughtAnimal = {
    seaBass: {
        livesInRiver: false,
        caught: true
    },
    moth: {
        spawnsOnTrees: false,
        caught: false
    }
}

console.log(typeof ICaughtAnimal)

