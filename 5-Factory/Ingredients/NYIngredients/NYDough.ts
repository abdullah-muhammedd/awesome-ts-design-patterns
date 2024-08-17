import Dough, { DoughType } from "../IngredientsInterfaces/Dough";

export default class NYDough implements Dough {
    type: DoughType = DoughType.ThinCrust;
    getDoughType(): DoughType {
        return this.type
    }
}