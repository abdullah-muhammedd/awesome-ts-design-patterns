import Beverage from "./Beverage";

export default class HouseBlend extends Beverage {
    constructor() {
        super();
        this.descreption = "House Blend";
    }
    public cost(): number {
        return 0.89
    }
}