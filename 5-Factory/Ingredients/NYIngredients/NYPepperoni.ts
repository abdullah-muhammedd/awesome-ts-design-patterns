import Pepperoni, { PepperoniType } from "../IngredientsInterfaces/Pepperoni";

export default class NYPepperoni implements Pepperoni {
    type: PepperoniType = PepperoniType.Regular;
    getPepperoniType(): PepperoniType {
        return this.type
    }

}