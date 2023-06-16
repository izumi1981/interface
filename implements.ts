interface Base {
    name: string;
    doSomething();
}

class Concrete implements Base {
    name: string = "Concrete";
    doSomething() {
        console.log(this.name);
    }
}

class Derived implements Base {
    name: string = "Derived";
    doSomething() {
        console.log(this.name);
    }
}

let base: Base = new Concrete();
base.doSomething();
base = new Derived();
base.doSomething();