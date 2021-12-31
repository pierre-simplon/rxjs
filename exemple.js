import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  switchMap,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const textInput = document.getElementById("text-input");

const inputBox$ = fromEvent(textInput, "keyup");

inputBox$
  .pipe(
    debounceTime(500),
    pluck("target", "value"),
    distinctUntilChanged(),
    switchMap((value) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${value}`)
    )
  )
  .subscribe(console.log);
