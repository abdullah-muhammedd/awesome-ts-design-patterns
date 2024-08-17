import Clams, { ClamType } from "../IngredientsInterfaces/Clams";

export default class NYClams implements Clams {
    type: ClamType = ClamType.Fresh;
    getClamType(): ClamType {
        return this.type
    }
}