import IFlyable from "./IFlyable";

class FlyWithRocketPower implements IFlyable {
    fly(): void {
        console.log("I'm flying with rocket power");
    }

}

export default FlyWithRocketPower