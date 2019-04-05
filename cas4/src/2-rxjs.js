import { interval, range, Subject, Observable, fromEvent } from "rxjs";
import { take, filter, map, takeUntil } from "rxjs/operators";

function executeInterval(stop$) {
    return interval(500).pipe(
        filter(x => x % 2 === 1),
        map(x => x + 2),
        take(10),
        takeUntil(stop$)
    ).subscribe(x => console.log(x));
}

function getRandomNumbers(stop$) {
    return Observable.create((generator) => {
        setInterval(() => {
            generator.next(parseInt(Math.random() * 10))
        }, 300);
    }).pipe(takeUntil(stop$));
}

function createUnsubscribeButton(subscription) {
    const button = document.createElement('button');
    button.innerHTML = "asdasdasd";
    document.body.appendChild(button);
    button.onclick = () => {
        console.log(subscription);
        subscription.unsubscribe();
    };
}

function createStopButton(stop$) {
    const button = document.createElement('button');
    button.innerHTML = "Stop";
    document.body.appendChild(button);
    button.onclick = () => {
        stop$.next("STOP");
        stop$.complete();
    };
}

const subject$ = new Subject();
subject$.subscribe(x => console.log(`sub ${x}`));
subject$.next(4);
subject$.next(6);

createStopButton(subject$);

getRandomNumbers(subject$).subscribe(x => console.log(`rand ${x}`));
const sub = executeInterval(subject$);

fromEvent(document, "mousemove").pipe(
    map(ev => ({
        x: ev.x,
        y: ev.y
    })
    )
)
    .subscribe(coordinates => {
        console.log(`x=${coordinates.x} y=${coordinates.y}`);
    })
