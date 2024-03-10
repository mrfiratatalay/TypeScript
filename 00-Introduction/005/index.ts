//! The "any" Type:
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// any type is turn off type checking:

const movies = ["one", "two", "three", "four"];
let foundMovie;

for (let movie of movies) {
  if (movie === "three") {
    foundMovie = "three";
  }
}
