import PizzaIngredientFactory from "../Ingredients/PizzaIngredientFactory";
import { Pizza } from "./Pizza";

export default class CheesePizza extends Pizza {
    private pizzaIngredientFactory: PizzaIngredientFactory
    constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
        super();
        this.pizzaIngredientFactory = pizzaIngredientFactory;
    }
    public prepare(): void {
        this.dough = this.pizzaIngredientFactory.createDough();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.cheese = this.pizzaIngredientFactory.createCheese();
    }
}