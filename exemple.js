import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, 1, 2, 2, 2, 1, 3, 4, 3, 2, 1);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);
