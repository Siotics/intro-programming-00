import Animal from "./animal";

export default class Mammal extends Animal implements MammalInterface {
    private validChildren: number;

    constructor(name: string, validFood: string[], validChildren: number) {
        super(name, validFood);
        this.validChildren = validChildren;
    }

    birth(name: string, validFood: string[]): MammalInterface {
        return new Mammal(name, validFood, this.validChildren);
    }
}
