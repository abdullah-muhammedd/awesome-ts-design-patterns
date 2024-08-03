import FlyNoWay from "../Behaviours/FlyNoWay";
import Mute from "../Behaviours/Mute";
import Duck from "./Duck";

class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehaviour = new FlyNoWay();
        this.quackBehaviour = new Mute();
    }
    public display(): void {
        console.log("I'm a Model Duck man get away from me!");
    }
}

export default ModelDuck;