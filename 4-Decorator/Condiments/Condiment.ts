import Beverage from "../Beverages/Beverage";

export default abstract class Condiment extends Beverage {
    beverage: Beverage
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    public abstract getDescription(): string
}