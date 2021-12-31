import { fromEvent, interval } from "rxjs";
import { switchMap } from "rxjs/operators";

const click$ = fromEvent(document, "click");

const intervall$ = interval(1000);

click$.pipe(switchMap(() => intervall$)).subscribe(console.log);
