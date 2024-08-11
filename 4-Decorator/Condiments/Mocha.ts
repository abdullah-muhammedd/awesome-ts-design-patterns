import Condiment from "./Condiment";

export default class Mocha extends Condiment {
    constructor(beverage: any) {
        super(beverage);
    }
    public getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    public cost(): number {
        return this.beverage.cost() + 0.20;
    }

}