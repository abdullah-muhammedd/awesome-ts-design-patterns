import Condiment from "./Condiment";

export default class SteamedMilk extends Condiment {
    constructor(beverage: any) {
        super(beverage);
    }
    public getDescription(): string {
        return `${this.beverage.getDescription()}, Steamed Milk`;
    }

    public cost(): number {
        return this.beverage.cost() + 0.10;
    }

}