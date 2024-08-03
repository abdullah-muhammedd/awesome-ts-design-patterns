import FlyWithRocketPower from "../Behaviours/FlyWithRocketPower";
import Quack from "../Behaviours/Quack";
import Duck from "./Duck";

class RocketDuck extends Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyWithRocketPower();
        this.quackBehaviour = new Quack();
    }
    public display(): void {
        console.log("I'm a Rocket Duck! 🚀🚀🚀🚀🚀");
    }
}

export default RocketDuck;