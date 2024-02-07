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