// Part-1
function square(num) {
    return num * num;
}
function greet(person) {
    return "Hi there, ".concat(person, "!");
}
square(13);
greet("Firat");
// Part-2
var doSomething = function (person, age, isFunny) {
    return "Hi there, ".concat(person, ". You are ").concat(age, ". That's ").concat(isFunny);
};
doSomething("Firat", 13, true);
