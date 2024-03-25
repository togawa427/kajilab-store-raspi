"use client"
import React, { useEffect, useState } from 'react'
import { Button, LoadingOverlay } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Arrival from "@/app/features/arrival/components/Index"
import { Product } from "@/types/json";
import Link from "next/link";
import { createPayment, getProductByBarcode } from "@/api";
import { useRouter, useSearchParams } from 'next/navigation';
import { CartProduct } from '@/types/product';
import { updateAddedProductList, updateTotalPrice } from '@/utils/product';
import { Notifications, notifications } from '@mantine/notifications';
import Barcode from '@/app/components/Barcode';
import CartProductsList from '@/app/components/CartProductsList';

const Base = () => {
  const [cartProducts, setCartProducts] = useState<Array<CartProduct>>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);

  const router = useRouter();

  const handleScanBarcode = async (barcode: number) => {
    const cartProduct = await getProductByBarcode(Number(barcode))
    if(cartProduct.id != null){
      updateAddedProductList(cartProduct, 1, cartProducts, setCartProducts)
    }
    else{
      notifications.show({
        title: "存在しないバーコード",
        message: "未登録のバーコードが読み込まれました",
        color:"red",
        style: (theme) => ({
          style: { backgroundColor: 'red' }
        })
      })
    }
  }

  const handleConfirmButton = () => {
    console.log("かくていされちった")
  }

  // デバッグ用
  const showCartProducts = () => {
    console.log(cartProducts)
  }

  useEffect(() => {
    updateTotalPrice(cartProducts, setTotalPrice)
  }, [cartProducts])

  return (
    <div>
      <Barcode handleScanBarcode={handleScanBarcode}/>
      <div className="mt-2">
          <Link href={"/"}>
          <Button variant="light" color="gray">
              <IconChevronsLeft/><div className="text-xl">キャンセル</div>
          </Button>
          </Link>
      </div>
      <div className="mt-2">
          <CartProductsList
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
      </div>
      <div className="mt-2 flex flex-row-reverse">
        <div>
          <Arrival.TotalPricePanel totalPrice={totalPrice}/>
          <Arrival.TotalWithdrawalPanel totalWithdrawal={totalWithdrawal} setTotalWithDrawal={setTotalWithdrawal}/>
        </div>
        <Arrival.ConfirmButton handleConfirmButton={handleConfirmButton}/>
      </div>
      <Notifications/>
    </div>
  )
}

export default Base