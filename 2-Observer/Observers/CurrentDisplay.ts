import IDisplay from "../IDisplay/IDisplay";
import WheatherData from "../Subject/WheatherData";
import IObserver from "./IObserver";

export default class CurrentDisplay implements IObserver, IDisplay {
    private subject: WheatherData
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    constructor(subject: WheatherData) {
        this.subject = subject
        this.subject.registerObserver(this)
    }
    display(): void {
        console.log(`Current conditions: ${this.temperature}°C, ${this.humidity}% humidity, ${this.pressure} hPa`)
    }
    update(): void {
        this.temperature = this.subject.getTemperature()
        this.humidity = this.subject.getHumidity()
        this.pressure = this.subject.getPressure()
        this.display()
    }
}