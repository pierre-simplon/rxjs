import { timer } from "rxjs";

const timer$ = timer(3000, 1000);

timer$.subscribe(console.log);
