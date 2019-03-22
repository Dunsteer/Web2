import { interval, range, Observable } from "rxjs";
import { take, filter, map } from "rxjs/operators";

function executeInterval() {
    return interval(500).pipe(
        filter(x => x % 2 === 1),
        map(x => x + 2),
        take(10)
    ).subscribe(x => console.log(x));
}
const sub = executeInterval();
createUnsubscribeButton(sub);

function createUnsubscribeButton(subscription) {
    const button = document.createElement('button');
    button.innerHTML = "asdasdasd";
    document.body.appendChild(button);
    button.onclick = () => {
        console.log(subscription);
        subscription.unsubscribe();
    };
}

