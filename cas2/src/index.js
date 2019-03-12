import { Movie } from "./movie";
import { compareMovies as copm } from "./functions";

const m1 = new Movie("Avengers", 2015, 5);
const m2 = new Movie("Die Hard 2", 1990, 8);

console.log(copm(m1, m2));