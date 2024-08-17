import { Pizza, PizzaType } from "../Pizzas/Pizza";

export default abstract class PizzaStore {

    public orderPizza(type: PizzaType): Pizza {
        let pizza: Pizza;

        pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    protected abstract createPizza(type: PizzaType): Pizza;

}
