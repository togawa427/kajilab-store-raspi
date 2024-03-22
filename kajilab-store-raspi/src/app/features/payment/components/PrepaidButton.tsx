"use client"
import React from 'react'
import { IconId } from '@tabler/icons-react'
import { LoadingOverlay, rem } from '@mantine/core'
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
    <button className="py-2 px-5 mx-10 w-3/12 h-36 bg-celadon-100 rounded-xl shadow">
        <IconId style={{ width: rem(80), height: rem(80), color: "gray"}} className="mx-auto mt-0"/>
        <p className="text-3xl text-gray-500 font-bold">coming soon</p>
        {/* <p className="text-4xl font-bold">（学生証）</p> */}
    </button>
  )
}

export default PrepaidButton