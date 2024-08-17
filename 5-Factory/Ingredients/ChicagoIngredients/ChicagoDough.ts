import Dough, { DoughType } from "../IngredientsInterfaces/Dough";

export default class ChicagoDough implements Dough {
    type: DoughType = DoughType.ThickCrust;
    getDoughType(): DoughType {
        return this.type
    }
}