import Veggies, { VeggieType } from "../IngredientsInterfaces/Veggies";

export default class NYVeggies implements Veggies {
    types: VeggieType[] = [VeggieType.Olives, VeggieType.BellPepper];
    getVeggieType(): VeggieType[] {
        return this.types
    }
}