export default class Food {
    private animal: AnimalExtendInterface;
    private foodRepo: FoodInterface[] = [];
    constructor(animal: AnimalExtendInterface) {
        this.animal = animal;
    }

    getAnimalAtt() {
        return this.animal.getAtt();
    }
}
