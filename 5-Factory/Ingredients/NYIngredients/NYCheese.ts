import Cheese, { CheeseType } from "../IngredientsInterfaces/Cheese";

export default class NYCheese implements Cheese {
    type: CheeseType = CheeseType.Mozzarella;
    getCheeseType(): CheeseType {
        return this.type
    }
}