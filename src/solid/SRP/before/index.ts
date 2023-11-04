import Animal from "./animal";

const Monkey = new Animal("Monkey", ["bananas"]);
const Cow = new Animal("Cow", ["Grass"]);

const Zoo = new Animal("Zoo", []);
Zoo.addAnimal([Monkey, Cow]);
console.log(Zoo.getAnimals());
