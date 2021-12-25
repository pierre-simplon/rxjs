import { fromEvent } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};

const source$ = fromEvent(document, "keyup");

const subsciptionOne = source$.subscribe(observer);
const subsciptionTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log("unsubscribing one...");
  subsciptionOne.unsubscribe();
}, 3000);
