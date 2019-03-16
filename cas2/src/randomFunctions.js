export function getRandomNumber(cb) {
 const number = parseInt(Math.random() * 96523);
 setTimeout(() => {
   cb(number);
 }, 500);
}

// getRandomNumber((num) => {
//  console.log(`From callback:${num}`);
// });

export function getRandomNumberAsync() {
 return new Promise((res, rej) => {
   const number = parseInt(Math.random() * 10);
   if (number < 5)
     setTimeout(() => res(number), 500);
   else
     setTimeout(() => rej("Number too big"), 500);
 });
}


// getRandomNumberAsync()
//  .then(res => {
//    console.log(`Promise sent: ${res}`);
//    if (res >= 3)
//      return getRandomNumberAsync();
//    throw "Not big enough";
//  }).then(res2 => {
//    console.log(`Next promise sent: ${res2}`);
//  }).catch(err => {

//    console.error(`ERROR: ${err}`);
//  });

async function CallRandom() {
 const num = await getRandomNumberAsync();//await ceka promise resolve, ali moze samo u async funkciji
 console.log(num);
}

// CallRandom().catch(err => {
//  console.error(`ERROR: ${err}`);
// });