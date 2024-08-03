import FlyNoWay from "../Behaviours/FlyNoWay";
import Squeck from "../Behaviours/Squeck";
import Duck from "./Duck";

class RubberDuck extends Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new Squeck();
    }
    public display(): void {
        console.log("I'm a Rubber Duck! 🍼🍼🍼🍼🍼");
    }
}

export default RubberDuck;