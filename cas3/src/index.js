import { Movie } from "./movie";
import { MovieService } from "./movieService";

async function start() {
  let ms = new MovieService();
  let m = await ms.getRandom().catch(err => console.error(`ERROR: ${err}`));
  if (m) {
    m.print();
  }

  console.log(await ms.get());
  console.log(await ms.getByIndex(2));


  Promise.all([ms.getRandom(), ms.getRandom(), ms.getRandom()]).then((movies) => {
    movies[0].print();
    movies[1].print();
    movies[2].print();
  })

}

start();