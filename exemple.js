import { Observable } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};

const observable = new Observable((subscriber) => {
  let count = 0;

  const interval = setInterval(() => {
    subscriber.next(count++);
  }, 1000);
});

const subsciption = observable.subscribe(observer);

setTimeout(() => {
  subsciption.unsubscribe();
}, 3500);
