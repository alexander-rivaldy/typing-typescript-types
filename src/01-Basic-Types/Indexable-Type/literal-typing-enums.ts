

// without literal typing, direction could be passed in as any string
const headTo = (direction: string) => {
    this.move(direction)
}

// with literal typing, we now have a selection!
type Direction = 'West' | 'East' | 'South' | 'North'

const headTo = (direction: Direction) => {
    this.move(direction)
}

headTo('West')
headTo('West a')

const foo = (another: string) => {
    headTo(another);
}

// enum
enum Direction { 
    WEST = 'West',
    EAST = 'East',
    SOUTH = 'South',
    NORTH = 'North'
}

const headTo = (direction: Direction) => {
    this.move(direction)
}

headTo(Direction.EAST)
headTo('East')