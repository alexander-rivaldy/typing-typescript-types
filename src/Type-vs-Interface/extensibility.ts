
interface Hero {
    name: string;
    power: string;
}

class SuperHero implements Hero {
    ...
}

interface Villain extends Hero {
    sidekick: Hero;
}

