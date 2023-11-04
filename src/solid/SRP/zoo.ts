export default class Zoo implements ZooInterface {
    private zooName: string;
    private animalZoo: string[] = [];
    constructor(zooName: string) {
        this.zooName = zooName;
    }

    addAnimal(animals: AnimalEncapsule[]): string {
        for (const animal of animals) {
            this.animalZoo.push(animal.getName());
        }
        return `${this.zooName} has new animal`;
    }

    getAnimals(): string[] {
        return this.animalZoo;
    }
}
