import Beverage from "./Beverage";

export default class Espresso extends Beverage {
    constructor() {
        super();
        this.descreption = "Espresso";
    }
    public cost(): number {
        return 1.99
    }
}