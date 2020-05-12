export interface IProduct {
    id: number,
    name: string,
    supplier: string,
    category: string,
    price: number,
    discounted: string,
    discount: number
}

export class Product implements IProduct {
    id: number;
    name: string;
    supplier: string;
    category: string;
    price: number;
    discounted: string;
    discount: number;

    constructor() {
        this.id = 0;
        this.name = '';
        this.supplier = '';
        this.category = '';
        this.price = 0;
        this.discounted = '';
        this.discount = 0;
    }
}