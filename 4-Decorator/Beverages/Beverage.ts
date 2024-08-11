export default abstract class Beverage {
    protected descreption: string;

    constructor() {
        this.descreption = "Abstract Beverage";
    }

    public getDescription(): string {
        return this.descreption
    }

    public abstract cost(): number;
}