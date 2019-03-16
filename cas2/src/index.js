import { Movie } from "./movie";
import { MovieService } from "./moviceService";

async function start() {
  let ms = new MovieService();
  let m = await ms.getRandom().catch(err=>console.error(`ERROR: ${err}`));
  if (m) {
    m.print();
  }

  console.log(await ms.get());
  console.log(await ms.getByIndex(2));
}

start();