import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Payment from "@/app/features/payment/components/Index"
import { Product } from "@/types/json";
import Link from "next/link";
import { getProductByBarcode } from "@/api";


export default async function PaymentPage() {

    // const product = await getProductByBarcode();
    // console.log(product)

    return (
        <div>
            <Payment.Base/>
        </div>
    )
}