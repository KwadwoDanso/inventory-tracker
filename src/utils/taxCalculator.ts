import { Product } from "../models/Product";

// Utility function that accepts a Product and returns the price including tax.
// Leverages polymorphism — each product type calculates its own tax.
export function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}