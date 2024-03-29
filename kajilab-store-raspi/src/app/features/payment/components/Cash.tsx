import { Button, rem } from '@mantine/core'
import React from 'react'
import { IconChevronsLeft, IconLoader2 } from "@tabler/icons-react"

type CashPageProps = {
  totalPrice: number;
  setPaymentModeBase: any;
  handleCashPayButton: () => void;
  loading: boolean;
}

const Cash = ({totalPrice, setPaymentModeBase, handleCashPayButton, loading}: CashPageProps) => {

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
            {loading ? (
              <div className="flex justify-center animate-spin">
                <IconLoader2
                  style={{ width: rem(100), height: rem(100) }}
                />
              </div> // くるくるの要素
            ) : (
              <div className="text-8xl font-extrabold">投 入 完 了</div> // 通常のボタンのテキスト
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cash