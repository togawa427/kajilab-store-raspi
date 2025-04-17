"use client"
import { Button, rem } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import {IconCash} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

type CashButtonPageProps = {
  changeCashMode: any;
}

const CashButton = ({changeCashMode}: CashButtonPageProps) => {
  const router = useRouter();

  const handleClick = () => {
    changeCashMode()
    // router.push("/payment/cash")
    // router.refresh()
  }

  return (
    <button className="w-3/12 bg-redorange-100 rounded-xl shadow active:bg-redorange-200" onClick={handleClick}>
        <IconCash style={{ width: rem(80), height: rem(80) }} className="mx-auto mt-0"/>
        <p className="text-3xl font-bold">現金で支払</p>
        {/* <p className="text-4xl font-bold">（現金）</p> */}
    </button>
  )
}

export default CashButton