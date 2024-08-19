export default class Boiler {
    static instance: Boiler | null = null
    empty: boolean
    boiled: boolean
    milk: boolean
    cocoa: boolean

    private constructor() {
        this.empty = true
        this.boiled = false
        this.milk = false
        this.cocoa = false
    }

    public static getInstance(): Boiler {
        if (!this.instance) {
            this.instance = new Boiler()
        }
        return this.instance
    }

    public fill(): void {
        if (this.isEmpty()) {
            this.empty = false
            this.milk = true
            this.cocoa = true
            this.boiled = false
        }
    }

    public drain(): void {
        if (!this.isEmpty() && this.isBoiled()) {
            this.empty = true
            this.milk = false
            this.cocoa = false
        }
    }

    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true
        }
    }

    public isEmpty(): boolean {
        return this.empty
    }

    public isBoiled(): boolean {
        return this.boiled
    }
}
