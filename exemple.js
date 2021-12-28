import { fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

const keyup$ = fromEvent(document, "keyup");

const keycode$ = keyup$.pipe(map((event) => event.code));

const keycodeWithPlug$ = keyup$.pipe(pluck("code"));

const keyPressed$ = keycode$.pipe(mapTo("Keypressed !"));

keycode$.subscribe(console.log);

keycodeWithPlug$.subscribe(console.warn);

keyPressed$.subscribe(console.error);
