import Mammal from "./mammal";

const monkey = new Mammal("monkey", ["bananas"], 5);

const monkey1 = monkey.birth("monkey1", ["mango"]);
const monkey2 = monkey1.birth("monkey2", ["pineapple"]);

console.log(monkey.eat(["bananas"]));
console.log(monkey1.eat(["mango"]));
console.log(monkey1.eat(["bananas"]));
console.log(monkey.getParents());
console.log(monkey1.getParents());
console.log(monkey2.getParents());
