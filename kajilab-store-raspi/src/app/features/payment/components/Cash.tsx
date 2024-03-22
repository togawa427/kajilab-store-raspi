import { Button } from '@mantine/core'
import React from 'react'
import { IconChevronsLeft } from "@tabler/icons-react"

type CashPageProps = {
  totalPrice: number;
  setPaymentModeBase: any;
  handleCashPayButton: () => void;
}

const Cash = ({totalPrice, setPaymentModeBase, handleCashPayButton}: CashPageProps) => {

  return (
    <div>
      <div className="mt-2">
        <Button variant="light" color="gray" onClick={setPaymentModeBase}>
            <IconChevronsLeft/><div className="text-xl">戻る</div>
        </Button>
      </div>
      <div className="text-center">
        <div className="mt-8 text-9xl font-extrabold">{totalPrice} 円</div>
        <div className="mt-10 text-4xl font-bold">お金を投入したら下のボタンを押してください</div>
        <div className="mt-2 text-6xl">↓</div>
        <div className="mt-2">
          <button className="w-10/12 h-48 bg-celadon-100 rounded-xl shadow-xl active:bg-celadon-200" onClick={handleCashPayButton}>
            <div className="text-8xl font-extrabold">
              投 入 完 了
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cash