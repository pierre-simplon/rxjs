import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

const inputBox = document.getElementById("text-input");

const input$ = fromEvent(inputBox, "keyup");

input$
  .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged)
  .subscribe(console.log);
