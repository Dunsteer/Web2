export class Movie {
 constructor(name, rating, year) {
  this.name = name;
  this.rating = rating;
  this.year = year;
 }
 print() {
  console.log(`Name:${this.name}, Rating: ${this.rating}/10, Year: ${this.year}`);
 }
}