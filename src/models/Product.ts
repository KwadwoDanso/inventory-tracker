// Base Product class demonstrating encapsulation and abstraction
export class Product {
    // Protected properties so subclasses can access them directly
    protected sku: string;
    protected name: string;
    protected price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    // Returns a formatted string with the product's details
    displayDetails(): string {
        return `SKU: ${this.sku} | Name: ${this.name} | Price: $${this.price.toFixed(2)}`;
    }

    // Base tax calculation — subclasses override this (polymorphism)
    getPriceWithTax(): number {
        return this.price;
    }
}