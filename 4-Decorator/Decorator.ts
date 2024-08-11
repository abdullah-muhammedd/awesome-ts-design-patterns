import Espresso from "./Beverages/Espresso";
import HouseBlend from "./Beverages/HouseBlend";
import Mocha from "./Condiments/Mocha";
import Soy from "./Condiments/Soy";

export default class Decorator {
    public static run(): void {
        const espresso = new Espresso()
        console.log(`${espresso.getDescription()} : ${espresso.cost()} $\n`)
        const houseBlend = new HouseBlend()
        const soy = new Soy(houseBlend)
        const mocha = new Mocha(soy)
        const doubleMocha = new Mocha(mocha)
        console.log(`${doubleMocha.getDescription()} : ${doubleMocha.cost()} $\n`)
    }
} 