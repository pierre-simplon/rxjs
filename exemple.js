import { fromEvent } from "rxjs";
import { take, map } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$
  .pipe(
    take(1),
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    }))
  )
  .subscribe({
    next: console.log,
    complete: () => console.log("complete"),
  });
