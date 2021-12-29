import { from } from "rxjs";
import { scan } from "rxjs/operators";

const numbers$ = from([1, 2, 3, 4, 5]);

const totalReducer = (acc, curr) => acc + curr;

const total$ = numbers$.pipe(scan(totalReducer, 0));

total$.subscribe({
  next: console.log,
  complete: () => console.log("complete"),
});
