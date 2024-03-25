import { Button, LoadingOverlay } from '@mantine/core';
import React from 'react'
import { IconChevronsLeft } from "@tabler/icons-react"

type CreditPageProps = {
  totalPrice: number;
  setPaymentModeBase: any;
}

const Credit = ({totalPrice, setPaymentModeBase}: CreditPageProps) => {
  return (
    <div>
      <div className="mt-2">
        <Button variant="light" color="gray" onClick={setPaymentModeBase}>
            <IconChevronsLeft/><div className="text-xl">戻る</div>
        </Button>
      </div>
      Credit
    </div>
  )
}

export default Credit