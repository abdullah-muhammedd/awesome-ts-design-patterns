import Boiler from "./Boiler";

export default class Singletone {
    public static run(): void {
        const boiler = Boiler.getInstance()
        console.log("Empty: " + boiler.isEmpty())
        console.log("Boiled: " + boiler.isBoiled())
        boiler.fill()
        console.log("Empty: " + boiler.isEmpty())
        console.log("Boiled: " + boiler.isBoiled())
        boiler.boil()
        console.log("Empty: " + boiler.isEmpty())
        console.log("Boiled: " + boiler.isBoiled())
    }
} 