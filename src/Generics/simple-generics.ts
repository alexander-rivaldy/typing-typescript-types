


// type caught = {
//     caught: boolean
// }

// type FISHY = caught & {
//     livesInRiver: boolean;
//  }
//  type BUGGY = caught & {
//     spawnsOnTrees: boolean;
//  }

//  type CaughtAnimal = (FISHY | BUGGY) & { caught: boolean; }

//  type CAUGHTANIMAL = 
 
//  const seaBass: CaughtAnimal = {
//     livesInRiver: false,
//     caught: true
//  }
//  const moth: CaughtAnimal = {
//     spawnsOnTrees: false,
//     caught: false
//  }
 

interface Point {
    x: number;
    y: number
}

const points: Point[] = [
    {x: 1, y: 2},
    {x: 2, y: 3}
]

interface Student {
    id: string;
    name: string;
}
const students: Student[] = [
    {id: '123', name: 'Midoriya'},
    {id: '456', name: 'Fumikage'}
]

const sortByKey = <T, U extends keyof T >(values: T[], key: U): T[] => {
    // 
}
sortByKey(points, 'x');
sortByKey(students, 'id');

sortByKey<Student, keyof Student>(students, 'id');
