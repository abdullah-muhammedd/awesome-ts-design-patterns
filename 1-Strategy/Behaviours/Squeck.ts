import IQuackable from "./IQuackable";

class Squeck implements IQuackable {
    public quack(): void {
        console.log("Squeck Squeck Squeck Squeck Squeck");
    }
}
export default Squeck