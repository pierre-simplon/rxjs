import { of } from "rxjs";
import { take } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(take(3)).subscribe({
  next: console.log,
  complete: () => console.log("complete"),
});
