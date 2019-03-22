import { interval, range, Observable } from "rxjs";
import { take, filter, map } from "rxjs/operators";

function executeInterval() {
    interval(500).pipe(
        filter(x => x % 2 === 1),
        map(x => x + 2),
        take(10)
    ).subscribe(x => console.log(x));
}

function executeRange() {
    range(10, 30).subscribe(x => console.log(x));
}

function getRandomNUmbers() {
    return Observable.create((generator) => {
        setInterval(() => {
            generator.next(parseInt(Math.random() * 10))
        }, 300);
    });
}

function getTenEven(){
    return getRandomNUmbers().pipe(
        filter(x=>x%2==0),
        take(10)
    )
}   

getTenEven().subscribe(x => console.log(x));