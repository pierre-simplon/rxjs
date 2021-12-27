import { interval } from "rxjs";

const timer$ = interval(1000);

timer$.subscribe(console.log);
