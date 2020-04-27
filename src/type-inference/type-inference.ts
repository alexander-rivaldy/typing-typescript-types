
// type inference
let pid = "788229"

pid = 788229

// type widening

const attackWith = (weapon: 'sword' | 'gun' | 'shield') => {
    ...
}

let x = 'sword';

attackWith(x)

