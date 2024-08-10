import { EventEmitter } from "node:events";
import IObserver from "../../2-Observer/Observers/IObserver";
import ISubject from "../../2-Observer/Subject/ISubject";
export default class WheatherData extends EventEmitter implements ISubject {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        super();
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    registerObserver(observer: IObserver): void {
        this.on("update", () => observer.update())
    }

    removeObserver(observer: IObserver): void {
        this.off("update", () => observer.update())
    }

    notifyObservers(): void {
        this.emit("update")
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