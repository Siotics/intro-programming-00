import Mammal from "./mammal";

const monkey = new Mammal("monkey", ["bananas"], 5);

const monkey1 = monkey.birth("monkey1", ["mango"]);

console.log(monkey.eat(["bananas"]));
console.log(monkey1.eat(["mango"]));
