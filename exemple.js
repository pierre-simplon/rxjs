import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

const inputBox = document.getElementById("text-input");

const input$ = fromEvent(inputBox, "keyup");

input$.pipe(debounceTime(1000)).subscribe(console.log);
