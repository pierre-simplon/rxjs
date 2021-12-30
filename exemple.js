import { fromEvent, interval } from "rxjs";
import { debounce, distinctUntilChanged, pluck } from "rxjs/operators";

const inputBox = document.getElementById("text-input");

const input$ = fromEvent(inputBox, "keyup");

input$
  .pipe(
    debounce(() => interval(1000)),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
