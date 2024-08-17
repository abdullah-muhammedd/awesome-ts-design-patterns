import Veggies, { VeggieType } from "../IngredientsInterfaces/Veggies";

export default class ChicagoVeggies implements Veggies {
    types: VeggieType[] = [VeggieType.Mushroom, VeggieType.Onion];
    getVeggieType(): VeggieType[] {
        return this.types
    }


}