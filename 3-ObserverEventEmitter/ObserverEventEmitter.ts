import { StatDisplay } from "./Observers/StatsDisplay";
import WheatherData from "./Subject/WheatherData";
import CurrentDisplay from './Observers/CurrentDisplay';

export default class ObserverEventEmitter {
    public static run(): void {
        const subject = new WheatherData();
        const currentDisplay = new CurrentDisplay(subject);
        const statDisplay = new StatDisplay(subject);

        subject.setMeasurements(75, 50, 100)

        setInterval(() => {
            subject.setMeasurements(
                subject.getTemperature() + Math.random() * 10,
                subject.getHumidity() + Math.random() * 10,
                subject.getPressure() + Math.random() * 10
            )
            console.log("\n")
        }, 3000)
    }
} 