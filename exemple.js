import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(1000)).subscribe(console.log);
