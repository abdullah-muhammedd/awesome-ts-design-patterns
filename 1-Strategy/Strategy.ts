import FlyWithRocketPower from "./Behaviours/FlyWithRocketPower";
import Duck from "./Ducks/Duck";
import MalardDuck from "./Ducks/MalardDuck";
import ModelDuck from "./Ducks/ModelDuck";
import RocketDuck from "./Ducks/RocketDuck";
import RubberDuck from "./Ducks/RubberDuck";

class Strategy {
    public static run(): void {
        const malard: Duck = new MalardDuck()
        const rocket: Duck = new RocketDuck()
        const rubber: Duck = new RubberDuck()
        const model: Duck = new ModelDuck()

        console.log();
        malard.display();
        malard.performFly();
        malard.performQuack();
        malard.setFlyBehaviour(new FlyWithRocketPower());
        malard.performFly();

        console.log();
        rocket.display();
        rocket.performFly();
        rocket.performQuack();

        console.log();
        rubber.display();
        rubber.performFly();
        rubber.performQuack();

        console.log();
        model.display();
        model.performFly();
        model.performQuack();

        console.log();
    }
}
export default Strategy