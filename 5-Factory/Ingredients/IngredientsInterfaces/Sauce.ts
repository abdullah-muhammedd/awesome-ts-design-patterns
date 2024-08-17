export enum SauceType {
    Marinara = 'Marinara',
    Alfredo = 'Alfredo'
}

export default interface Sauce {
    type: SauceType;
    getSauceType(): SauceType;
}