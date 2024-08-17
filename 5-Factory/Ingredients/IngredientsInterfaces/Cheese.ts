export enum CheeseType {
    Mozzarella = 'Mozzarella',
    Parmesan = 'Parmesan'
}

export default interface Cheese {
    type: CheeseType;
    getCheeseType(): CheeseType;
}