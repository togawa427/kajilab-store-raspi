"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Payment from "@/app/features/payment/components/Index"
import { Product } from "@/types/json";
import Link from "next/link";
import { getProductByBarcode } from "@/api";
import { useSearchParams } from 'next/navigation';
import { BuyProduct } from '../type';
import { updateTotalPrice } from '../utils';
import { updateAddedProductList } from '@/utils/product';
import { Notifications, notifications } from '@mantine/notifications';

const Base = () => {
  const [paymentMode, setPaymentMode] = useState(0) // 0:カート 1:現金 2:学生証
  const [buyProducts, setBuyProducts] = useState<Array<BuyProduct>>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleScanBarcode = async (barcode: number) => {
    const buyProduct = await getProductByBarcode(Number(barcode))
    if(buyProduct.id != null){
      updateAddedProductList(buyProduct, 1, buyProducts, setBuyProducts)
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

  // ページ遷移時はパラムデータを使う
  const searchParams = useSearchParams();
  useEffect(() => {
    
    const paramBarcode = searchParams.get("barcode")
    handleScanBarcode(Number(paramBarcode))
  },[])

  // デバッグ用
  const showBuyProducts = () => {
    console.log(buyProducts)
  }

  useEffect(() => {
    updateTotalPrice(buyProducts, setTotalPrice)
  }, [buyProducts])

  if(paymentMode == 0){
    return (
      <div>
        <Payment.InputBarcode handleScanBarcode={handleScanBarcode}/>
        <div className="mt-2">
            <Link href={"/"}>
            <Button variant="light" color="gray">
                <IconChevronsLeft/><div className="text-xl">キャンセル</div>
            </Button>
            </Link>
        </div>
        <div className="mt-2">
            <Payment.PaymentProductsList
              buyProducts={buyProducts}
              setCartProducts={setBuyProducts}
            />
        </div>
        <div className="mt-2 flex flex-row-reverse">
            <Payment.TotalPricePanel totalPrice={totalPrice}/>
            <Payment.PrepaidButton changePrepaidMode={() => setPaymentMode(2)}/>
            <Payment.CashButton changeCashMode={() => setPaymentMode(1)}/>
        </div>
        {/* <Button onClick={() => setPaymentMode(1)}>現金テスト</Button> */}
        <Notifications/>
      </div>
    )
  }
  else if(paymentMode == 1) {
    return(
      <div>
        現金
        <Button onClick={() => setPaymentMode(0)}>キャンセル</Button>
      </div>
    )
  }
  else if(paymentMode == 2) {
    return(
      <div>
        学生証
        <Button onClick={() => setPaymentMode(0)}>キャンセル</Button>
      </div>
    )
  }
}

export default Base