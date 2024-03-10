// Part-1
function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

square(13);
greet("Firat");

// Part-2
const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `Hi there, ${person}. You are ${age}. That's ${isFunny}`;
};

doSomething("Firat", 13, true);

// Part-3
function message(person: string = "FIRAT") {
  return `Hi there, ${person}`;
}
