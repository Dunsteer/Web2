import { Movie } from "./movie";
import { getRandomNumberAsync } from "./randomFunctions";


export class MovieService {
 constructor() {
  this.movies = [new Movie("movie 1", 5, 1997), new Movie("movie 2", 8, 2000), new Movie("movie 3", 3, 2004), new Movie("movie 4", 10, 1980)];
 }
 get() {
  return new Promise((res, rej) => {
   let hasErr = parseInt(Math.random() * 10) > 8;
   setTimeout(() => hasErr ? rej("Internal server error1") : res(this.movies), 1000);
  });
 }

 getByIndex(index) {
  return new Promise((res, rej) => {
   let hasErr = parseInt(Math.random() * 10) > 8;
   setTimeout(() => hasErr || index > this.movies.length - 1 || index < 0 ? rej("Internal server error2") : res(this.movies[index]), 1000);
  });
 }

 getRandom() {

  return new Promise(async (res, rej) => {
   let index = await getRandomNumberAsync().catch(err => {
    console.error("Internal server error3", err);
   });
   index ? this.getByIndex(index).then(m => res(m)).catch(err => rej(err)) : rej("no index");
  });
 }
}