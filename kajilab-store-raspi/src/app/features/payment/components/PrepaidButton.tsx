"use client"
import React from 'react'
import { IconId } from '@tabler/icons-react'
import { rem } from '@mantine/core'
import { useRouter } from 'next/navigation'

const PrepaidButton = () => {
  const router = useRouter()

    const handleClick = () => {
        router.push("/payment/prepaid")
        router.refresh()
    }

  return (
    <button className="py-2 px-5 mx-10 w-3/12 h-52 bg-[#C3FEFA] rounded-xl shadow active:bg-[#A2FEF8]" onClick={handleClick}>
        <IconId style={{ width: rem(100), height: rem(100) }} className="mx-auto mt-0"/>
        <p className="text-4xl font-bold">支払画面へ</p>
        <p className="text-4xl font-bold">（学生証）</p>
    </button>
  )
}

export default PrepaidButton