import { interval } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers$ = interval([1, 2, 3, 4, 5], 1000);

const totalReducer = (acc, curr) => acc + curr;

const total$ = numbers$.pipe(take(3), reduce(totalReducer, 0));

total$.subscribe({
  next: console.log,
  complete: () => console.log("complete"),
});
