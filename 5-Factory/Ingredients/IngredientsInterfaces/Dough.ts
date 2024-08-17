export enum DoughType {
    ThinCrust = 'Thin Crust',
    ThickCrust = 'Thick Crust',
}

export default interface Dough {
    type: DoughType;
    getDoughType(): DoughType;
}
