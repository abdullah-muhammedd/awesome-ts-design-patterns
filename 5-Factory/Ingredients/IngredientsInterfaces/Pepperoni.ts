export enum PepperoniType {
    Regular = 'Regular',
    Spicy = 'Spicy'
}

export default interface Pepperoni {
    type: PepperoniType;
    getPepperoniType(): PepperoniType;
}