export interface IOrder {
    id: number,
    customerName: string,
    address: string,
    city: string,
    shipper: string,
    orderDate: string,
    orderTotal: number
}

export class Order implements IOrder {
    id: number;
    customerName: string;
    address: string;
    city: string;
    shipper: string;
    orderDate: string;
    orderTotal: number;

    constructor() {
        this.id = 0;
        this.customerName = '';
        this.address = '';
        this.city = '';
        this.shipper = '';
        this.orderDate = '';
        this.orderTotal = 0;
    }
}