import Sauce, { SauceType } from "../IngredientsInterfaces/Sauce";

export default class ChicagoSauce implements Sauce {
    type: SauceType = SauceType.Alfredo;
    getSauceType(): SauceType {
        return this.type
    }

}