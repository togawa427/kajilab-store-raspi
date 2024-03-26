export type Payment = {
    id: number;
    price: number;
    pay_at: Date;
    method: string;
    user_name: string;
    products: PaymentProduct[];
}

export type PaymentProduct = {
    id: number;
    name: string;
    barcode: number;
    quantity: number;
    unit_price: number;
}

export type Arrival = {
    id: number;
    money: number;
    value: number;
    arrive_at: string;
    products: ArrivalProduct[];
}

export type ArrivalProduct = {
    id: number;
    name: string;
    barcode: number;
    quantity: number;
    unit_price: number;
}

export type Product = {
    id: number;
    name: string;
    barcode: number;
    price: number;
    stock: number;
    tag_id: number;
    image_path: string;
}