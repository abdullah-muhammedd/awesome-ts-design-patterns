import Cheese, { CheeseType } from "../IngredientsInterfaces/Cheese";

export default class ChicagoCheese implements Cheese {
    type: CheeseType = CheeseType.Parmesan;
    getCheeseType(): CheeseType {
        return this.type
    }
}