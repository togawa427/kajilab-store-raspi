"use client"
import React, { useEffect, useState } from 'react'
import { Button, LoadingOverlay, Modal } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Arrival from "@/app/features/arrival/components/Index"
import { Product } from "@/types/json";
import Link from "next/link";
import { createArrival, createPayment, getProductByBarcode } from "@/api";
import { useRouter, useSearchParams } from 'next/navigation';
import { CartProduct } from '@/types/product';
import { updateAddedProductList, updateTotalPrice } from '@/utils/product';
import { Notifications, notifications } from '@mantine/notifications';
import Barcode from '@/app/components/Barcode';
import CartProductsList from '@/app/components/CartProductsList';
import { useDisclosure } from '@mantine/hooks';

type PropsType = {
  userBarcode: string
}

const Base = ({userBarcode}: PropsType) => {
  const [cartProducts, setCartProducts] = useState<Array<CartProduct>>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [scanedBarcode, setScanedBarcode] = useState(0);
  const [newProductBarcode, setNewProductBarcode] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();

  const handleScanBarcode = async (barcode: number) => {
    const cartProduct = await getProductByBarcode(Number(barcode))
    if(cartProduct.id != null){
      updateAddedProductList(cartProduct, 1, cartProducts, setCartProducts)
    }
    else{
      // 新商品の場合
      setNewProductBarcode(Number(barcode))
      open()
    }
  }

  const handleConfirmButton = async () => {
    const status = await createArrival(cartProducts, totalWithdrawal, userBarcode)
    router.push("/")
    router.refresh()
  }
  
  useEffect(() => {
    updateTotalPrice(cartProducts, setTotalPrice)
  }, [cartProducts])

  return (
    <div>
      <Barcode barcode={scanedBarcode} setBarcode={setScanedBarcode} handleScanBarcode={handleScanBarcode}/>
      <Modal size="60%" opened={opened} onClose={close} title="新商品の登録">
        <Arrival.NewProductModal modalDelete={close} barcode={newProductBarcode} setBarcode={setScanedBarcode}/>
      </Modal>
      <div className="mt-2">
          <Link href={"/admin"}>
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
      <div className="mt-8 flex flex-row-reverse">
        <div>
          <Arrival.TotalPricePanel totalPrice={totalPrice}/>
          <Arrival.TotalWithdrawalPanel totalWithdrawal={totalWithdrawal} setTotalWithDrawal={setTotalWithdrawal} setScanedBarcode={setScanedBarcode}/>
        </div>
        <Arrival.ConfirmButton handleConfirmButton={handleConfirmButton}/>
      </div>
      <Notifications/>
    </div>
  )
}

export default Base