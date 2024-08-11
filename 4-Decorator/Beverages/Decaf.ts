import Beverage from "./Beverage";

export default class Decaf extends Beverage {
    constructor() {
        super();
        this.descreption = "Decaf";
    }
    public cost(): number {
        return 1.05
    }
}