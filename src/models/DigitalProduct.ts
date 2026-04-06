import { Product } from "./Product";

// DigitalProduct extends Product — demonstrates inheritance
export class DigitalProduct extends Product {
    private _fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }

    // Getter returns the formatted file size in megabytes
    get formattedFileSize(): string {
        return `${this._fileSize} MB`;
    }

    // Override: digital products have no tax
    getPriceWithTax(): number {
        return this.price;
    }

    // Override displayDetails to include file size
    displayDetails(): string {
        return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
    }
}