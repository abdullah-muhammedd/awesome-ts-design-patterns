import Cheese from "./IngredientsInterfaces/Cheese";
import Clams from "./IngredientsInterfaces/Clams";
import Dough from "./IngredientsInterfaces/Dough";
import Pepperoni from "./IngredientsInterfaces/Pepperoni";
import Sauce from "./IngredientsInterfaces/Sauce";
import Veggies from "./IngredientsInterfaces/Veggies";
import PizzaIngredientFactory from "./PizzaIngredientFactory";
import NYDough from "./NYIngredients/NYDough"
import NYSauce from "./NYIngredients/NYSauce"
import NYCheese from "./NYIngredients/NYCheese"
import NYVeggies from "./NYIngredients/NYVeggies"
import NYPepperoni from "./NYIngredients/NYPepperoni"
import NYClams from "./NYIngredients/NYClams"
export default class NYIngredientsFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new NYDough
    }
    public createSauce(): Sauce {
        return new NYSauce()
    }
    public createCheese(): Cheese {
        return new NYCheese()
    }
    public createVeggies(): Veggies {
        return new NYVeggies()
    }
    public createPepperoni(): Pepperoni {
        return new NYPepperoni()
    }
    public createClam(): Clams {
        return new NYClams()
    }


}