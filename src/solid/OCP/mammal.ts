import Animal from "./animal";

export default class Mammal extends Animal implements MammalInterface {
    private validChildren: number;
    private parents: string[] = [];

    constructor(
        name: string,
        validFood: string[],
        validChildren: number,
        parent?: string | string[]
    ) {
        super(name, validFood);
        this.validChildren = validChildren;
        if (typeof parent === "string") {
            this.parents.push(parent);
        }
        if (Array.isArray(parent)) {
            for (const p of parent) {
                this.parents.push(p);
            }
        }
    }

    birth(name: string, validFood: string[]): MammalInterface {
        if (!this.parents.length) {
            return new Mammal(
                name,
                validFood,
                this.validChildren,
                this.getName()
            );
        }
        return new Mammal(name, validFood, this.validChildren, [
            ...this.parents,
            this.getName(),
        ]);
    }

    getParents(): string | string[] {
        if (!this.parents.length) {
            return "This animal is a predecessor";
        }
        return this.parents;
    }
}
