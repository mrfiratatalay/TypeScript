// Part-1
// function square(num: number) {
//   return num * num;
// }
// function greet(person: string) {
//   return `Hi there, ${person}!`;
// }
// square(13);
// greet("Firat");
// Part-2
// const doSomething = (person: string, age: number, isFunny: boolean) => {
//   return `Hi there, ${person}. You are ${age}. That's ${isFunny}`;
// };
// doSomething("Firat", 13, true);
// Part-3
// function message(person: string = "FIRAT") {
//   return `Hi there, ${person}`;
// }
// Part-4
function greet(person) {
    return "Hi there, ".concat(person, "!");
}
function square(num) {
    return num * num;
}
var add = function (x, y) {
    return x + y;
};
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// Part-5
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
// Part-6
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// Part-7
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Game Loop Running!");
    }
}
