import Strategy from "./1-Strategy/Strategy";
import Observer from "./2-Observer/Observer";
import ObserverEventEmitter from "./3-ObserverEventEmitter/ObserverEventEmitter";
import Decorator from "./4-Decorator/Decorator";
import Factory from "./5-Factory/Factory";
import Singletone from "./6-Singleton/Singletone";

console.log("________ Start Strategy Pattern _________")
Strategy.run();
console.log("________ End Strategy Pattern _________")

console.log("________ Start Observer Pattern _________")
Observer.run();
console.log("________ End Observer Pattern _________")

console.log("________ Start Observer Pattern With Node Event Emitter _________")
ObserverEventEmitter.run();
console.log("________ End Observer Pattern With Node Event Emitter _________")

console.log("________ Start Decorator Pattern _________")
Decorator.run();
console.log("________ End Decorator Pattern _________")

console.log("________ Start Factory Pattern _________")
Factory.run();
console.log("________ End Factory Pattern _________")

console.log("________ Start Singletone Pattern _________")
Singletone.run();
console.log("________ End Singletone Pattern _________")