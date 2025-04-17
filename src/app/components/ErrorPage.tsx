"use client"
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

const ErrorPage = () => {
  const router = useRouter()

  const handleButton = () => {
    router.push("/")
    router.refresh()
  }
  return (
    <div className='text-center'>
      <div className="text-5xl mt-52 mb-20">
        サーバーエラー
      </div>
      <Button onClick={handleButton} color='gray' variant="outline" size="xl" radius="xl">
        再読み込み
      </Button>
    </div>
  )
}

export default ErrorPage