"use client"
import { Button, LoadingOverlay, rem } from '@mantine/core';
import React, { useState } from 'react'
import { IconChevronsLeft } from "@tabler/icons-react"
import * as Payment from "@/app/features/payment/components/Index"
import { getUser } from '@/api';
import { Notifications, notifications } from '@mantine/notifications';
import Image from 'next/image';

type KajilabPayProps = {
  totalPrice: number;
  setPaymentModeBase: any;
  handleKajilabPayButton: any;
  loading: boolean;
}

const KajilabPay = ({totalPrice, setPaymentModeBase, handleKajilabPayButton, loading}: KajilabPayProps) => {
  const [userBarcode, setUserBarcode] = useState("");

  // バーコードをスキャンした時の処理
  const handleScanUserBarcode = async (barcode: string) => {
    const scannedUser = await getUser(barcode);
    if(barcode.slice(0,3) != "108"){
      // ユーザのバーコードでない場合
      notifications.show({
        title: "異なる種類のバーコード",
        message: "梶研Pay以外のバーコードが読み取られました",
        color:"red",
        style: (theme) => ({
          style: { backgroundColor: 'red' }
        })
      })
      return
    }
    if(scannedUser.debt < totalPrice){
      // 残高が足りない場合
      notifications.show({
        title: "残高不足",
        message: scannedUser.name + "の残高：" + scannedUser.debt,
        color:"red",
        style: (theme) => ({
          style: { backgroundColor: 'red' }
        })
      })
      return
    }
    if(scannedUser.id != null){
      // 該当のユーザがヒットした時のみ編集画面へ
      notifications.show({
        title: "支払い後の残高",
        message: scannedUser.name + "の残高：" + scannedUser.debt,
        color:"blue",
        
        style: (theme) => ({
          style: { backgroundColor: 'red' },
          // fontSize: rem(80)
        })
      })
      handleKajilabPayButton()
    } else {
      console.log("ユーザいないよ")
      // 該当のユーザが見つからなかった場合
      notifications.show({
        title: "存在しないユーザ",
        message: "未登録の梶研Payカードが読み取られました",
        color:"red",
        style: (theme) => ({
          style: { backgroundColor: 'red' }
        })
      })
    }

  }

  return (
    <div>
      <div className="mt-2">
        <Button variant="light" color="gray" onClick={setPaymentModeBase}>
            <IconChevronsLeft/><div className="text-xl">戻る</div>
        </Button>
      </div>

      <Payment.ScanUserBarcode
        handleScanBarcode={handleScanUserBarcode}
        barcode={userBarcode}
        setBarcode={setUserBarcode}
      />

      <div className="text-center items-center mt-5">
        <div className="mt-5 text-9xl font-extrabold">{totalPrice} 円</div>
        <div className="text-6xl font-bold p-3 mt-7">梶研Payカードをスキャンしてください</div>
        <Image
          className="mx-auto mt-10"
          src="/kjlbcard-scanmethod.jpg"
          width={600}
          height={300}
          alt="Picture of kajilabpay scan method"
        />
      </div>

      <Notifications className="text-2xl"/>
    </div>
  )
}

export default KajilabPay