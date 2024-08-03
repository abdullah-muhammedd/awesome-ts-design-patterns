import IFlyable from "./IFlyable";

class FlyWithWings implements IFlyable {
    fly(): void {
        console.log("I'm flying with wings!");
    }

}

export default FlyWithWings