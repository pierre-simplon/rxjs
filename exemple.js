import { fromEvent } from "rxjs";
import { takeWhile, map } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$
  .pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY,
    })),
    takeWhile((value) => value.x > 150)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log("complete"),
  });
