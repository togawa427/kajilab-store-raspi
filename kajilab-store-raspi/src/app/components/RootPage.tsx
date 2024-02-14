"use client"
import React from 'react'
import { Button, Modal } from '@mantine/core';
import Link from 'next/link';
import PaymentList from './PaymentList';
import InputBarcode from './InputBarcode';
import { Payment } from '@/types/json';
import { useDisclosure } from '@mantine/hooks';

type RootPageProps = {
  payments: Payment[];
}

const RootPage = ({payments}:RootPageProps) => {

  return (
    <div>
      <InputBarcode/>
      <div className="text-right mt-2 mb-5">
        {/* <button className="bg-red-500 rounded py-1 px-2 text-slate-50 #__next">同期</button> */}
        <Button color='red'>同期</Button>
      </div>
      <p className="text-center text-7xl mt-10 font-bold">商品をスキャンしてください</p>
      <div className="mt-20">
        <PaymentList payments={payments}/>
      </div>
      <div className="absolute bottom-5">
        <Link href={"/admin"}>
          <Button fullWidth variant="filled" color='red'>商店係モード</Button>
        </Link>
      </div>
      <div className="text-right">
        <Link href={`http://localhost:3002/payment`}>
          <Button>購入画面へ</Button>
        </Link>
      </div>
    </div>
  )
}

export default RootPage