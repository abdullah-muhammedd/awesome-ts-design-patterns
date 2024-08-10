import Strategy from "./1-Strategy/Strategy";
import Observer from "./2-Observer/Observer";
import ObserverEventEmitter from "./3-ObserverEventEmitter/ObserverEventEmitter";

// console.log("________ Start Strategy Pattern _________")
// Strategy.run();
// console.log("________ End Strategy Pattern _________")

// console.log("________ Start Observer Pattern _________")
// Observer.run();
// console.log("________ End Observer Pattern _________")

console.log("________ Start Observer Pattern With Node Event Emitter_________")
ObserverEventEmitter.run();
console.log("________ End Observer Pattern With Node Event Emitter_________")