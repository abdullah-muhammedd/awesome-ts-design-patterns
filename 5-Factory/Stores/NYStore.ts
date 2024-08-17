import { PizzaType, Pizza } from "../Pizzas/Pizza";
import PizzaStore from "./PizzaStore";
import PizzaIngredientFactory from '../Ingredients/PizzaIngredientFactory';
import NYIngredientsFactory from "../Ingredients/NYIngredientsFactory";
import CheesePizza from "../Pizzas/CheesePizza";
import VeggiesPizza from "../Pizzas/VeggiesPizza";
import ClamsPizza from "../Pizzas/ClamsPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";

export default class NYStore extends PizzaStore {
    protected createPizza(type: PizzaType): Pizza {
        let pizza: Pizza;
        let ingredientFactory: PizzaIngredientFactory = new NYIngredientsFactory();
        if (type === PizzaType.Cheese) {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        } else if (type === PizzaType.Veggie) {
            pizza = new VeggiesPizza(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        } else if (type === PizzaType.Clams) {
            pizza = new ClamsPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        } else if (type === PizzaType.Pepperoni) {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        } else {
            throw new Error("Unknown pizza type");
        }
        return pizza;
    }
}