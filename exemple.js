import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const timer$ = interval(1000).pipe(take(3));

const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => timer$)).subscribe(console.log);
