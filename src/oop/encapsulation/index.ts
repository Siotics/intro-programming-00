import Animal from "./animal";

const monkey = new Animal("monkey", ["bananas", "mango"]);

console.log(monkey.move(5));
console.log(monkey.eat(["bananas"]));
console.log(monkey.getName());
console.log(monkey.setName("Humans"));
