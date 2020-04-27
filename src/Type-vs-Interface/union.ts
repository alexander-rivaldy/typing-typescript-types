

//  type union

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

// interface trying to use type union

// interface Fish {
//     livesInRiver: boolean;
// }

// interface Bug {
//     spawnsOnTrees: boolean;
// }

// interface ICaughtAnimal {
//     [type: string]: (Fish | Bug) & { caught: boolean};
// }

// interface CaughtAnimal<T> extends T {
//     caught: boolean;
// }

// const ICaughtAnimal: ICaughtAnimal = {
//     seaBass: {
//         livesInRiver: false,
//         caught: true
//     },
//     moth: {
//         spawnsOnTrees: false,
//         caught: false
//     }
// }

// console.log(typeof ICaughtAnimal)



interface Animal {
    species: string;
}

interface Fish extends Animal {
    waterHabitat: string;
}

interface Bug extends Animal {
    hardExoskeleton: boolean;
}


type TAnimal = {
    species: string
}

type TFish = TAnimal & {
    waterHabitat: string;
}

type TBug = TAnimal & {
    hardExoskeleton: boolean;
}