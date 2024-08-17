import Sauce, { SauceType } from "../IngredientsInterfaces/Sauce";

export default class NYSauce implements Sauce {
    type: SauceType = SauceType.Marinara;
    getSauceType(): SauceType {
        return this.type
    }

}