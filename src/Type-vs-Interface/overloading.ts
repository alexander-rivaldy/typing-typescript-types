

// interface ILibrary {
//     findStaff(id: number): boolean
//     findBook(title: string): boolean
// }

// interface IAnotherLibrary extends ILibrary {
//     findStaff(id: number | string): boolean
//     findBook(title: string, author: string): boolean
// }

// const check: AnotherLibrary = {
//     findStaff: (id: number | string) => true,
//     findBook: (title: string, author: string) => true,
// }


// type Library = {
//     findStaff(id: number): boolean
//     findBook(title: string): boolean
// }

// type AnotherLibrary = Library & {
//     findStaff(id: number | string): boolean
//     findBook(title: string, author: string): boolean
// }

// const test: AnotherLibrary = {
//     findStaff: (id: number) => true,
//     findBook: (title: string) => true,
//     findBook: (title: string, author:string) => true
// }

// console.log(test.findBook('a', 'b'))




interface Calculator {
    add(x: number, y: number): number
    add(x: number, y: number, z: number): number
}

const calculator: Calculator = {
    add: (x: number, y: number) => x + y ,
    add: (x: number, y: number, z:number) => x + y + z
}

calculator.add(1, 2)
calculator.add(1, 2, 3)