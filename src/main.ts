import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// Create instances of PhysicalProduct and DigitalProduct
const laptop = new PhysicalProduct("PHY-001", "Laptop", 999.99, 2.5);
const headphones = new PhysicalProduct("PHY-002", "Wireless Headphones", 149.99, 0.3);
const ebook = new DigitalProduct("DIG-001", "TypeScript Handbook", 29.99, 15);
const software = new DigitalProduct("DIG-002", "Photo Editor License", 59.99, 500);

// Store all products in a single array — polymorphism in action
const inventory: Product[] = [laptop, headphones, ebook, software];

// Loop through each product and display its details and final price with tax
console.log(" Inventory Tracker \n");

for (const product of inventory) {
    console.log(product.displayDetails());
    console.log(`  Price with Tax: $${calculateTax(product).toFixed(2)}`);
    console.log("");
}

console.log("-");