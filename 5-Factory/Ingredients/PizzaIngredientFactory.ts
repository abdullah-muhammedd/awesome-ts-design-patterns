import Dough from "./IngredientsInterfaces/Dough";
import Sauce from "./IngredientsInterfaces/Sauce";
import Cheese from "./IngredientsInterfaces/Cheese";
import Veggies from "./IngredientsInterfaces/Veggies";
import Pepperoni from "./IngredientsInterfaces/Pepperoni";
import Clams from "./IngredientsInterfaces/Clams";

export default interface PizzaIngredientFactory {
     createDough(): Dough;
     createSauce(): Sauce;
     createCheese(): Cheese;
     createVeggies(): Veggies;
     createPepperoni(): Pepperoni;
     createClam(): Clams;
}
