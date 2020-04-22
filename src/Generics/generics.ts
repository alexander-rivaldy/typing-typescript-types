
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