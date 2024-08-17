export enum VeggieType {
    BellPepper = 'Bell Pepper',
    Onion = 'Onion',
    Mushroom = 'Mushroom',
    Olives = 'Olives'
}

export default interface Veggies {
    types: VeggieType[];
    getVeggieType(): VeggieType[];
}