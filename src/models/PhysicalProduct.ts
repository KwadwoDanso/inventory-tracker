import { Product } from "./Product";

// PhysicalProduct extends Product — demonstrates inheritance
export class PhysicalProduct extends Product {
    private _weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this._weight = weight;
    }

    // Getter returns the formatted weight in kilograms
    get formattedWeight(): string {
        return `${this._weight} kg`;
    }

    // Override: physical products have a 10% tax rate
    getPriceWithTax(): number {
        return this.price * 1.1;
    }

    // Override displayDetails to include weight
    displayDetails(): string {
        return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
    }
}