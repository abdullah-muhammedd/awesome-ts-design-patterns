import Condiment from "./Condiment";

export default class Soy extends Condiment {
    constructor(beverage: any) {
        super(beverage);
    }
    public getDescription(): string {
        return `${this.beverage.getDescription()}, Soy`;
    }

    public cost(): number {
        return this.beverage.cost() + 0.15;
    }

}