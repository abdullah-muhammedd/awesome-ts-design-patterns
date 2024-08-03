import IFlyable from "./IFlyable";

class FlyNoWay implements IFlyable {
    fly(): void {
        console.log("I can't fly sorry man");
    }

}

export default FlyNoWay