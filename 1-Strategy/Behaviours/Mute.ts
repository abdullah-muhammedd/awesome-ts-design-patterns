import IQuackable from "./IQuackable";

class Mute implements IQuackable {
    public quack(): void {
        console.log("I can't quack sorry man");
    }
}
export default Mute