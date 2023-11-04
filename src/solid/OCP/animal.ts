export default class Animal implements AnimalEncapsule {
    private name: string;
    private food: string[];

    constructor(name: string, validFood: string[]) {
        this.name = name;
        this.food = validFood;
    }

    private isValidFood(food: string): boolean {
        return this.food.includes(food);
    }

    public move(steps: number): string {
        return `${this.name} moves ${steps} step`;
    }

    eat(foods: string[]): string[] {
        const foodProcess = [];
        for (const food of foods) {
            const isValid = this.isValidFood(food);
            if (!isValid) {
                foodProcess.push(`${food} is not valid food`);
            } else {
                foodProcess.push(`${food} is very yummy`);
            }
        }
        return foodProcess;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): string {
        this.name = name;
        return `This animal name is now ${this.name}`;
    }
}
