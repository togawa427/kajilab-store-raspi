import { Payment, Product } from "./types/json";

export const getPayments = async (): Promise<Payment[]> => {
    const res = await fetch("http://localhost:8080/api/v1/products/buy/logs?limit=5", {cache: "no-store"})  // SSR
    console.log(res)

    const payments = await res.json()
    return payments
}

export const getProductByBarcode = async (barcode: number): Promise<Product> => {
    const res = await fetch(`http://localhost:8080/api/v1/products/134912341234`, {cache: "no-store"})
    console.log(res)

    const product = await res.json()
    return product
}

export const deletePayment = async (id: number) => {
    const res = await fetch(`http://localhost:8080/api/v1/products/buy/${id}`, {method: "DELETE"});

    if(res.ok){
        console.log("削除に成功")
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return
}