interface AnimalAttInterface {
    name: string;
    weight: number;
    lenght: number;
    isHalal: boolean;
}

declare interface AnimalInterface {
    move(steps: number): string;
    eat(food: string[]): string[];
}

declare interface AnimalEncapsule extends AnimalInterface {
    getName(): string;
    setName(name: string): string;
}

declare interface MammalInterface extends AnimalInterface {
    birth(name: string, validFood: string[]): MammalInterface;
    getParents(): string | string[];
}

declare interface AnimalExtendInterface extends AnimalEncapsule {
    getAtt(): AnimalAttInterface;
    setAtt(weight: number, lenght: number, isHalal: boolean): string;
}

declare interface AnimalNoSRP extends AnimalEncapsule {
    addAnimal(animals: AnimalNoSRP[]): string;
    getAnimals(): string[];
}
