import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Payment from "@/app/features/payment/components/index";
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
                <Button>
                    <IconChevronsLeft/><div className="text-xl">キャンセル</div>
                </Button>
            </div>
            <div>
                <Payment.PaymentProductsList products={buyProducts}/>
            </div>
        </div>
    )
}