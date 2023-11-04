declare interface ZooInterface {
    addAnimal(animals: AnimalEncapsule[]): string;
    getAnimals(): string[];
}
