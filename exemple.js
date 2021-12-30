import { fromEvent } from "rxjs";
import { first, map } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    first((value) => value.x > 150)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log("complete"),
  });
