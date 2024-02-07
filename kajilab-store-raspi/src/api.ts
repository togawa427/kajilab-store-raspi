import { Payment } from "./types/json";

export const getPayments = async (): Promise<Payment[]> => {
    const res = await fetch("http://localhost:8080/api/v1/products/buy/logs?limit=5", {cache: "no-store"})
    console.log(res)

    const payments = await res.json()
    return payments
}