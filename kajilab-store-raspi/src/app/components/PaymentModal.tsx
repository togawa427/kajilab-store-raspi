import { Payment } from '@/types/json'
import React from 'react'

type RootPageProps = {
  deletedPayment: Payment;
}

const PaymentModal = ({deletedPayment}: RootPageProps) => {
  return (
    <div>
      モーダル
      <div>ID:{deletedPayment.id}</div>
      <div>Method:{deletedPayment.method}</div>
      <div>Price:{deletedPayment.price}</div>
    </div>
  )
}

export default PaymentModal