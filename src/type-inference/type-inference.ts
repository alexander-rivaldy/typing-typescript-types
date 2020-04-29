
// type inference
let pid = "788229"

pid = 788229

// type widening
type Weapon = 'sword' | 'gun' | 'shield'

const attackWith = (weapon: Weapon) => {
    ...
}

let x: Weapon = 'sword';

attackWith(x)

