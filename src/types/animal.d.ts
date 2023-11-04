declare interface AnimalInterface {
    move(steps: number): string;
    eat(food: string[]): string[];
}

declare interface AnimalEncapsule extends AnimalInterface {
    getName(): string;
    setName(name: string): string;
}
