import { interval, range, Subject, Observable, fromEvent, from, forkJoin, timer, zip } from "rxjs";
import { take, filter, map, takeUntil, sampleTime, debounceTime, switchMap, pairwise, scan } from "rxjs/operators";

function mousemove() {
    fromEvent(document, "mousemove").pipe(
        sampleTime(1000),
        map(ev => ({
            x: ev.x,
            y: ev.y
        })
        )
    )
        .subscribe(coordinates => {
            console.log(`x=${coordinates.x} y=${coordinates.y}`);
        })
}
function getMovies() {
    from(
        fetch("http://localhost:3000/movies")
            .then(res => res.json())
    ).subscribe(movies => {
        console.log(movies);
    })
}

function getMovie(id) {
    return from(
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
    )
}
// getMovie(3).subscribe(movies => {
//     console.log(movies);
// });

const movie_id_input = document.getElementById('movie-id');

// movie_id_input.oninput = (ev) => {
//     if (movie_id_input.value) {
//         getMovie(movie_id_input.value).subscribe(movies => {
//             console.log(movies);
//         });
//     }
// }

fromEvent(movie_id_input, "input")
    .pipe(
        debounceTime(300),
        map(ev => ev.target.value),
        filter(id => id.length > 0),
        switchMap(id => getMovie(id))
    ).subscribe(movie => {
        console.log(movie);
    })
function join() {
    const $obs1 = timer(1000).pipe(
        map(i => "ob 1")
    )
    const $obs2 = timer(3000).pipe(
        map(x => "ob 2")
    )

    forkJoin($obs1, $obs2)
        .subscribe(x => console.log(x));
}

const $niz = from([1, 2, 35, 12, 31, 31, 5, 5]);

const $timer = interval(500);

zip($niz, $timer).pipe(
    map(x => x[0]),
    pairwise(),
    filter(pair => {
        return pair[0] === pair[1]
    }),
    map(pair => pair[0]),
    scan((acc,val)=>acc+val)
).subscribe(x => console.log(x));

// .pipe(
//     pairwise(),
//     
// )
