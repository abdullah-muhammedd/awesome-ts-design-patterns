export enum ClamType {
    Fresh = 'Fresh',
    Frozen = 'Frozen'
}

export default interface Clams {
    type: ClamType;
    getClamType(): ClamType;
}