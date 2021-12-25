import { of } from "rxjs";

function hello() {
  return "Hello World";
}

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};

const source$ = of(1, 2, 3, 4, 5);

const subsciptionOne = source$.subscribe(observer);

console.log(hello());

subsciptionOne.unsubscribe();
