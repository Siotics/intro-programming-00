import Animal from "./animal";

export default class Amphibi extends Animal {
    private totalLegs: number;
    constructor(name: string, validFood: string[], totalLegs: number) {
        super(name, validFood);
        this.totalLegs = totalLegs;
    }

    public getTotalLegs() {
        return this.totalLegs;
    }
}
