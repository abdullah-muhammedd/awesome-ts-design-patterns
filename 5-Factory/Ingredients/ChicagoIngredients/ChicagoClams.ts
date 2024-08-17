import Clams, { ClamType } from "../IngredientsInterfaces/Clams";

export default class ChicagoClams implements Clams {
    type: ClamType = ClamType.Frozen;
    getClamType(): ClamType {
        return this.type
    }
}