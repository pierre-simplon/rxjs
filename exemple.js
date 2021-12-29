import { of } from "rxjs";
import { filter } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(filter((value) => value > 2))
  .subscribe(console.log);
