"use client"
import React from 'react'
import { Button, Modal } from '@mantine/core';
import Link from 'next/link';
import PaymentList from './PaymentList';
import InputBarcode from './InputBarcode';
import { Payment } from '@/types/json';
import { useDisclosure } from '@mantine/hooks';
import { Notifications, notifications } from '@mantine/notifications';

type RootPageProps = {
  payments: Payment[];
}

const RootPage = ({payments}:RootPageProps) => {

  return (
    <div>
      <InputBarcode/>
      {/* <div className="text-right mt-2 mb-5">
        <Button color='red'>同期</Button>
      </div> */}
      <p className="text-center text-7xl mt-10 font-bold">商品をスキャンしてください</p>
      <div className="mt-20">
        <PaymentList payments={payments}/>
      </div>
      <div className="absolute bottom-5">
        <Link href={"/admin"}>
          <Button fullWidth variant="filled" color='red'>商店係モード</Button>
        </Link>
      </div>
      <div className="absolute bottom-5 right-14">
        <Link href={"/kajilabpay"}>
          <Button fullWidth variant="filled" color="orange">梶研Pay関連</Button>
        </Link>
      </div>
      {/* <div className="text-right">
        <Link href={`http://localhost:3002/payment`}>
          <Button>購入画面へ</Button>
        </Link>
      </div> */}
      <Notifications/>
    </div>
  )
}

export default RootPage