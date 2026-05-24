interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly() { return 100 }
    public eat() {}

}

class HummingBird implements Bird, FlyingBird {

    public fly() { return 100 }
    public eat() {}

}

// Las avestruces no vuelan
class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}

}

class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
}

