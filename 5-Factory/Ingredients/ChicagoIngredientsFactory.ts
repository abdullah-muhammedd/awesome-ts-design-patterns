import ChicagoCheese from "./ChicagoIngredients/ChicagoCheese";
import ChicagoClams from "./ChicagoIngredients/ChicagoClams";
import ChicagoDough from "./ChicagoIngredients/ChicagoDough";
import ChicagoPepperoni from "./ChicagoIngredients/ChicagoPepperoni";
import ChicagoSauce from "./ChicagoIngredients/ChicagoSauce";
import ChicagoVeggies from "./ChicagoIngredients/ChicagoVeggies";
import Cheese from "./IngredientsInterfaces/Cheese";
import Clams from "./IngredientsInterfaces/Clams";
import Dough from "./IngredientsInterfaces/Dough";
import Pepperoni from "./IngredientsInterfaces/Pepperoni";
import Sauce from "./IngredientsInterfaces/Sauce";
import Veggies from "./IngredientsInterfaces/Veggies";
import PizzaIngredientFactory from "./PizzaIngredientFactory";

export default class ChicagoIngredientsFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ChicagoDough();
    }
    public createSauce(): Sauce {
        return new ChicagoSauce();
    }
    public createCheese(): Cheese {
        return new ChicagoCheese()
    }
    public createVeggies(): Veggies {
        return new ChicagoVeggies();
    }
    public createPepperoni(): Pepperoni {
        return new ChicagoPepperoni()
    }
    public createClam(): Clams {
        return new ChicagoClams()
    }

}