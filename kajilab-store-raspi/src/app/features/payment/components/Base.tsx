"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Payment from "@/app/features/payment/components/Index"
import { Product } from "@/types/json";
import Link from "next/link";
import { getProductByBarcode } from "@/api";
import { useSearchParams } from 'next/navigation';

const Base = () => {
  const [buyProducts, setBuyProducts] = useState<Array<Product>>([]);
  const [barcode, setBarcode] = useState(0);

  const searchParams = useSearchParams();
  useEffect(() => {
    const paramBarcode = searchParams.get("barcode")
    setBarcode(Number(paramBarcode!))
  },[])

  useEffect(() => {
    if((barcode.toString()).length > 4){
      console.log("商品追加！")
      console.log("バーコード：")
      console.log(barcode)
      setBuyProducts([...buyProducts, {
          id: 1,
          name: "じゃがりこサラダ味",
          barcode: barcode,
          price: barcode,
          stock: 8,
          tag_id: 1,
          image_path: ""
      }])
    }
  },[barcode])

  return (
    <div>
      <Payment.InputBarcode setBuyBarcode={setBarcode}/>
      <div className="mt-2">
          <Link href={"/"}>
          <Button variant="light" color="gray">
              <IconChevronsLeft/><div className="text-xl">キャンセル</div>
          </Button>
          </Link>
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

export default Base


// const buyProducts: Product[] = [
  //   {
  //       id: 1,
  //       name: "じゃがりこサラダ味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  //   {
  //       id: 2,
  //       name: "じゃがりこチーズ味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  //   {
  //       id: 3,
  //       name: "じゃがりこじゃがばた味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  //   {
  //       id: 1,
  //       name: "じゃがりこサラダ味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  //   {
  //       id: 1,
  //       name: "じゃがりこサラダ味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  //   {
  //       id: 1,
  //       name: "じゃがりこサラダ味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  //   {
  //       id: 1,
  //       name: "じゃがりこサラダ味",
  //       barcode: 123456789,
  //       price: 120,
  //       stock: 8,
  //       tag_id: 1,
  //       image_path: ""
  //   },
  // ]