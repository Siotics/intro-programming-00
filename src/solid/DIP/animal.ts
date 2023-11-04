export default class Animal implements AnimalExtendInterface {
    private name: string;
    private food: string[];
    private attribute: AnimalAttInterface;

    constructor(name: string, validFood: string[]) {
        this.name = name;
        this.food = validFood;
        this.attribute = { name: name, weight: 0, lenght: 0, isHalal: false };
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

    getAtt(): AnimalAttInterface {
        return this.attribute;
    }

    setAtt(weight: number, lenght: number, isHalal: boolean): string {
        const attribute = { ...this.attribute, lenght, weight, isHalal };
        this.attribute = attribute;
        return `${this.getName()} attribute was changed to ${this.getAtt()}`;
    }
}
