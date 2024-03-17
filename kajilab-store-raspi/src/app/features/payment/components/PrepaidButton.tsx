"use client"
import React from 'react'
import { IconId } from '@tabler/icons-react'
import { rem } from '@mantine/core'
import { useRouter } from 'next/navigation'

type PrepaidButtonPageProps = {
  changePrepaidMode: any;
}

const PrepaidButton = ({changePrepaidMode}: PrepaidButtonPageProps) => {
  const router = useRouter()

    const handleClick = () => {
      changePrepaidMode()
        // router.push("/payment/prepaid")
        // router.refresh()
    }

  return (
    <button className="py-2 px-5 mx-10 w-3/12 h-36 bg-celadon-100 rounded-xl shadow active:bg-celadon-200" onClick={handleClick}>
        <IconId style={{ width: rem(80), height: rem(80) }} className="mx-auto mt-0"/>
        <p className="text-3xl font-bold">学生証で支払</p>
        {/* <p className="text-4xl font-bold">（学生証）</p> */}
    </button>
  )
}

export default PrepaidButton