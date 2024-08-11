import Condiment from "./Condiment";

export default class Whip extends Condiment {
    constructor(beverage: any) {
        super(beverage);
    }
    public getDescription(): string {
        return `${this.beverage.getDescription()}, Whip`;
    }

    public cost(): number {
        return this.beverage.cost() + 0.10;
    }

}