import Zoo from "./zoo";
import Animal from "./animal";

const Monkey = new Animal("Monkey", ["bananas"]);
const Cow = new Animal("Cow", ["Grass"]);

const NewZoo = new Zoo("Zoo");
NewZoo.addAnimal([Monkey, Cow]);
console.log(NewZoo.getAnimals());
