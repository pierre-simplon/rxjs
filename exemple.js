import { interval } from "rxjs";
import { scan, mapTo, filter, tap } from "rxjs/operators";

const countdown = document.getElementById("countdown");
const message = document.getElementById("message");

const counter$ = interval(1000);

counter$
  .pipe(
    mapTo(-1),
    scan((acc, curr) => acc + curr, 10),
    tap(console.log),
    filter((val) => val >= 0)
  )
  .subscribe((value) => {
    countdown.innerHTML = value;
    if (!value) {
      message.innerHTML = "Lift Off!";
    }
  });
