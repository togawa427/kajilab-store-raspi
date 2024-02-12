import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Payment from "@/app/features/payment/components/index"
import { Product } from "@/types/json";


export default async function PaymentPage() {

    const buyProducts: Product[] = [
        {
            id: 1,
            name: "じゃがりこサラダ味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
        {
            id: 2,
            name: "じゃがりこチーズ味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
        {
            id: 3,
            name: "じゃがりこじゃがばた味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
        {
            id: 1,
            name: "じゃがりこサラダ味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
        {
            id: 1,
            name: "じゃがりこサラダ味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
        {
            id: 1,
            name: "じゃがりこサラダ味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
        {
            id: 1,
            name: "じゃがりこサラダ味",
            barcode: 123456789,
            price: 120,
            stock: 8,
            tag_id: 1,
            image_path: ""
        },
    ]

    return (
        <div>
            <div className="mt-2">
                <Button variant="light" color="gray">
                    <IconChevronsLeft/><div className="text-xl">キャンセル</div>
                </Button>
            </div>
            <div className="mt-2">
                <Payment.PaymentProductsList products={buyProducts}/>
            </div>
            <div className="mt-2 flex flex-row-reverse">
                <Payment.TotalPricePanel totalPrice={1000}/>
                <Payment.PrepaidButton/>
                <Payment.CashButton/>
            </div>
        </div>
    )
}