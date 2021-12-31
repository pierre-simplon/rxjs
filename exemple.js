import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, mergeMap } from "rxjs/operators";

const inputBox = document.getElementById("text-input");

const textInput$ = fromEvent(inputBox, "keyup");

textInput$
  .pipe(
    debounceTime(500),
    mergeMap((event) => {
      const turnText = event.target.value;
      return ajax.getJSON(`https://api.datamuse.com/words?sp=${turnText}`);
    })
  )
  .subscribe(console.log);
