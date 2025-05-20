"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import * as Kajilabpay from "@/app/features/kajilabpay/components/Index"
import { getUser } from '@/api';
import { Notifications, notifications } from '@mantine/notifications';
import Link from 'next/link';
import { Button } from '@mantine/core';
import { IconChevronsLeft } from '@tabler/icons-react';
import Image from 'next/image';

const UserBarcodeBase = () => {
  const router = useRouter();
  const [scannedBarcode, setScanedBarcode] = useState("")

  // バーコードをスキャンした時の処理
    const handleScanBarcode = async (barcode: string) => {
      const scannedUser = await getUser(barcode);
      if(barcode.slice(0,3) != "108"){
        // ユーザのバーコードでない場合
        notifications.show({
          title: "異なる種類のバーコード",
          message: "梶研Pay以外のバーコードが読み取られました",
          color:"red",
          autoClose: 3000,
          style: (theme) => ({
            style: { backgroundColor: 'red' }
          })
        })
        return
      }
      if(scannedUser.id != null){
        // 該当のユーザがヒットした時のみ編集画面へ
        router.push(`/admin/arrival/${barcode}`)
        router.refresh()
      } else {
        console.log("ユーザいないよ")
        // 該当のユーザが見つからなかった場合
        notifications.show({
          title: "存在しないユーザ",
          message: "未登録の梶研Payカードが読み取られました",
          color:"red",
          autoClose: 3000,
          style: (theme) => ({
            style: { backgroundColor: 'red' }
          })
        })
      }
    }

  return (
    <div>
      <Kajilabpay.ScanUserBarcode
        handleScanBarcode={handleScanBarcode}
        barcode={scannedBarcode}
        setBarcode={setScanedBarcode}
      />
      <div className="mt-2">
        <Link href={"/admin"}>
        <Button variant="light" color="gray" className="mt-5">
            <IconChevronsLeft/><div className="text-xl">キャンセル</div>
        </Button>
        </Link>
      </div>
      <div className="text-center items-center mt-5">
        <div className="text-7xl font-bold p-3">梶研Payカードを</div>
        <div className="text-7xl font-bold p-3">スキャンしてください</div>
        <Image
          className="mx-auto mt-10"
          src="/kjlbcard-scanmethod.jpg"
          width={300}
          height={200}
          alt="Picture of kajilabpay scan method"
        />
      </div>
      <div className='mx-auto text-center mt-10'>
        <Link href={"/admin/arrival/0"}>
          <Button
            size='xl'
            radius="lg"
            color='orange'
          >
            梶研Payを登録せず行う
          </Button>
        </Link>
      </div>
      <Notifications className="text-2xl"/>
    </div>
  )
}

export default UserBarcodeBase