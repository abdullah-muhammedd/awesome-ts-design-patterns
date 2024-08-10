import IDisplay from '../IDisplay/IDisplay';
import WheatherData from '../Subject/WheatherData';
import IObserver from './IObserver'

export class StatDisplay implements IObserver, IDisplay {
    private subject: WheatherData
    private temperature: number[] = [0];

    constructor(subject: WheatherData) {
        this.subject = subject
        this.subject.registerObserver(this)
    }
    display(): void {
        let average = 0;
        this.temperature.forEach((value: number) => {
            average += value
        })
        average /= this.temperature.length
        console.log(`Stats: Average Temperature : ${average}`);
    }
    update(): void {
        this.temperature.push(this.subject.getTemperature())
        this.display()
    }

};
