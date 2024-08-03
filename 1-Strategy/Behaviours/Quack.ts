import IQuackable from "./IQuackable";

class Quack implements IQuackable {
    public quack(): void {
        console.log("Quack Quack Quack Quack Quack");
    }
}
export default Quack