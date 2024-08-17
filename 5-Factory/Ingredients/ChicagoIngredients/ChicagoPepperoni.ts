import Pepperoni, { PepperoniType } from "../IngredientsInterfaces/Pepperoni";

export default class ChicagoPepperoni implements Pepperoni {
    type: PepperoniType = PepperoniType.Spicy;
    getPepperoniType(): PepperoniType {
        return this.type
    }

}