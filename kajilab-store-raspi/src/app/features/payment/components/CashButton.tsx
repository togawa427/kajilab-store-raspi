"use client"
import { Button, rem } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import {IconCash} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

const CashButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/payment/cash")
    router.refresh()
  }

  return (
    <button className="w-3/12 bg-[#FAC3FE] rounded-xl shadow active:bg-[#F8A4FE]" onClick={handleClick}>
        <IconCash style={{ width: rem(100), height: rem(100) }} className="mx-auto mt-0"/>
        <p className="text-4xl font-bold">支払画面へ</p>
        <p className="text-4xl font-bold">（現金）</p>
    </button>
  )
}

export default CashButton