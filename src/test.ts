

const amazing = {
    a: '',
    b: ''
}

class AASA {
    a: string;

    b: string;

    constructor() {
        this.a = ''
    }
}

type keyofAASA = keyof AASA;


console.log(Object.keys(amazing))
let object = new AASA()

console.log(Object.keys(object))

let total = [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);

// const hasAllKeys = Object.keys(object).reduce((hasAllKey, key) =>
//     hasAllKey && Object.keys(amazing).includes(key)
//     , true)

// console.log(hasAllKeys)

