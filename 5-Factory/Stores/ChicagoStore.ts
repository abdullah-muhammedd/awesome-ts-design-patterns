import { PizzaType, Pizza } from "../Pizzas/Pizza";
import PizzaStore from "./PizzaStore";
import PizzaIngredientFactory from '../Ingredients/PizzaIngredientFactory';
import CheesePizza from "../Pizzas/CheesePizza";
import VeggiesPizza from "../Pizzas/VeggiesPizza";
import ClamsPizza from "../Pizzas/ClamsPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";
import ChicagoIngredientsFactory from "../Ingredients/ChicagoIngredientsFactory";

export default class ChicagoStore extends PizzaStore {
    protected createPizza(type: PizzaType): Pizza {
        let pizza: Pizza;
        let ingredientFactory: PizzaIngredientFactory = new ChicagoIngredientsFactory();
        if (type === PizzaType.Cheese) {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("Chicago Style Cheese Pizza");
        } else if (type === PizzaType.Veggie) {
            pizza = new VeggiesPizza(ingredientFactory);
            pizza.setName("Chicago Style Veggie Pizza");
        } else if (type === PizzaType.Clams) {
            pizza = new ClamsPizza(ingredientFactory);
            pizza.setName("Chicago Style Clam Pizza");
        } else if (type === PizzaType.Pepperoni) {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("Chicago Style Pepperoni Pizza");
        } else {
            throw new Error("Unknown pizza type");
        }
        return pizza;
    }
}