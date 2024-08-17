import { PizzaType } from "./Pizzas/Pizza";
import ChicagoStore from "./Stores/ChicagoStore";
import NYStore from "./Stores/NYStore";


export default class Factory {
    public static run(): void {
        const chicagostore = new ChicagoStore();
        const nystore = new NYStore();
        console.log(chicagostore.orderPizza(PizzaType.Cheese) + "\n\n");
        console.log(chicagostore.orderPizza(PizzaType.Clams) + "\n\n");
        console.log(chicagostore.orderPizza(PizzaType.Pepperoni) + "\n\n");
        console.log(chicagostore.orderPizza(PizzaType.Veggie) + "\n\n");
        console.log(nystore.orderPizza(PizzaType.Cheese) + "\n\n");
        console.log(nystore.orderPizza(PizzaType.Clams) + "\n\n");
        console.log(nystore.orderPizza(PizzaType.Pepperoni) + "\n\n");
        console.log(nystore.orderPizza(PizzaType.Veggie) + "\n\n");
    }
} 