import IObserver from "../Observers/IObserver";
import ISubject from "./ISubject";

export default class WheatherData implements ISubject {
    private observers: IObserver[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    registerObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        this.observers.forEach((observer) => observer.update());
    }

    measurmentsChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurmentsChanged();
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }
}