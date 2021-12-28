import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, "keyup");

const keycode$ = keyup$.pipe(map((event) => event.code));

const keycodeWithPlug$ = keyup$.pipe(pluck("code"));

keycode$.subscribe(console.log);

keycodeWithPlug$.subscribe(console.warn);
