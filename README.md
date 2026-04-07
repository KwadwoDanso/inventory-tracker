# inventory-tracker
A simple object-oriented inventory tracker using TypeScript. The tracker will distinguish between PhysicalProduct and DigitalProduct, calculate applicable taxes, and manage inventory using modules. This lab will reinforce the key object-oriented programming concepts learned in the last lesson, including inheritance, encapsulation, abstraction, and polymorphism, while using TypeScript features such as type annotations and interfaces.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
- Product Base Class
- PhysicalProduct Subclass
- DigitalProduct Subclass
- Tax Calculator Utility
- Implement the Main Program
- DiscountableProduct interface that includes a method applyDiscount()
- Implement a module to handle sorting products by price or by name
- Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size


## Reflections/Critical Thinking

- How does TypeScript enforce type safety in this object-oriented program?
    -- Each variable, parameter, and reurn has a declared type. This prevents types from being assumed and it is explicitly stated. 

- How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
    -- Inheritance reduces code duplication for PhysicalProduct aand DigitalProduct would each need their own sku, name, price properties, their own constructor to set all three, and their own displayDetails() method 

- What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

    -- The benefits of using encapsulation and access modifiers in this context is it controls what can be accessed or modified.  _weight is private — nothing outside PhysicalProduct can read or change it directly. The only way to get the weight is through the formattedWeight getter, which always returns a string like "2.5 kg". That means if we later decide to store weight in pounds internally but display in kilograms, we change the getter and nothing else breaks. protected on price gave the subclasses direct access (PhysicalProduct needs this.price to calculate tax) while still keeping outside code from writing laptop.price = 0.

- If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
    -- Create one new file with a class that extends Product, add whatever unique property it needs (billingCycle), and override getPriceWithTax() with its own tax logic maybe 5%. It doesn't touch Product.ts, it doesn't touch taxCalculator.ts, and it doesn't touch the loop in main.ts. It pushes the new product into the inventory array and the existing for loop handles it, because it calls displayDetails() and getPriceWithTax() on each item without knowing or caring what specific type it is. 


### Links

- Solution URL:(https://github.com/KwadwoDanso/inventory-tracker.git)


## My process
- Project Setup

- Product.ts (base class)

- PhysicalProduct.ts 

- DigitalProduct.ts 

- taxCalculator.ts (utility)


- main.ts (entry point)

Import all classes + calculateTax
Create instances of PhysicalProduct and DigitalProduct
Store them in one Product[] array
Loop through array, call displayDetails() and calculateTax() on each

- Compile & Run

npx tsc → compiles to dist/
node dist/main.js → prints inventory with correct tax per product type
**Hving issues with this there are other files that seem to interfere - like js.map
**Still resolving

### Built with

-Javascript
-Typescript




### What I learned
- TypeScript type annotations, interfaces, and object-oriented programming concepts. 


## Author
-Author is Kwadwo 

## Acknowledgments


- MDN Web Docs
- w3schools
- Per Scholas JS lessons
- https://www.typescriptlang.org/docs/

