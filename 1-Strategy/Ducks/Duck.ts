import IFlyable from "../Behaviours/IFlyable";
import IQuackable from "../Behaviours/IQuackable";

abstract class Duck {
    protected flyBehaviour!: IFlyable
    protected quackBehaviour!: IQuackable
    public abstract display(): void

    public performFly(): void {
        this.flyBehaviour.fly();
    }

    public performQuack(): void {
        this.quackBehaviour.quack();
    }

    public swim(): void {
        console.log("All ducks float, even decoys!");
    }

    public setFlyBehaviour(flyBehaviour: IFlyable) {
        this.flyBehaviour = flyBehaviour;
    }

    public setQuackBehaviour(quackBehaviour: IQuackable) {
        this.quackBehaviour = quackBehaviour;
    }
}

export default Duck;
