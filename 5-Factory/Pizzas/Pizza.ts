import Cheese from "../Ingredients/IngredientsInterfaces/Cheese";
import Clams from "../Ingredients/IngredientsInterfaces/Clams";
import Dough from "../Ingredients/IngredientsInterfaces/Dough";
import Pepperoni from "../Ingredients/IngredientsInterfaces/Pepperoni";
import Sauce from "../Ingredients/IngredientsInterfaces/Sauce";
import Veggies from "../Ingredients/IngredientsInterfaces/Veggies";

export enum PizzaType {
    Clams = "Clams",
    Cheese = "Cheese",
    Pepperoni = "Pepperoni",
    Veggie = "Veggie"
}
export abstract class Pizza {
    protected name: string = '';
    protected dough!: Dough;
    protected sauce!: Sauce;
    protected veggies!: Veggies;
    protected cheese!: Cheese;
    protected pepperoni!: Pepperoni;
    protected clam!: Clams;

    public abstract prepare(): void;

    public bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    public cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    public box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public toString(): string {
        return `
            Pizza: ${this.name}
            Dough: ${this.dough ? this.dough.getDoughType() : 'N/A'}
            Sauce: ${this.sauce ? this.sauce.getSauceType() : 'N/A'}
            Cheese: ${this.cheese ? this.cheese.getCheeseType() : 'N/A'}
            Veggies: ${this.veggies && this.veggies.getVeggieType().length > 0 ? this.veggies.getVeggieType().join(', ') : 'N/A'}
            Pepperoni: ${this.pepperoni ? this.pepperoni.getPepperoniType() : 'N/A'}
            Clam: ${this.clam ? this.clam.getClamType() : 'N/A'}
        `;
    }
}
