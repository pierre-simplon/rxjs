import { of } from "rxjs";
import { map } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(map((x) => x * 10))
  .subscribe(console.log);
