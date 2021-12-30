import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(1000)).subscribe(console.log);
