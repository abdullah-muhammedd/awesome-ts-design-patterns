import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
    constructor() {
        super();
        this.descreption = "Dark Roast";
    }
    public cost(): number {
        return 0.99
    }
}