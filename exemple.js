import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

const keyup$ = fromEvent(document, "keyup");

const enter$ = keyup$.pipe(filter((e) => e.code === "Enter"));

enter$.subscribe(console.log);
