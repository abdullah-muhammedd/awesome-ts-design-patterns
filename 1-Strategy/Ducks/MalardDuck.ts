import FlyWithWings from "../Behaviours/FlyWithWings";
import Quack from "../Behaviours/Quack";
import Duck from "./Duck";

class MalardDuck extends Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyWithWings();
        this.quackBehaviour = new Quack();
    }
    public display(): void {
        console.log("I'm a Malard Duck! 🦆🦆🦆🦆🦆");
    }
}

export default MalardDuck;