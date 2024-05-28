import { deletePayment } from '@/api';
import { Payment } from '@/types/json'
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import React from 'react'

type RootPageProps = {
  deletedPayment: Payment;
  modalDelete: () => void;
}

const PaymentModal = ({deletedPayment, modalDelete}: RootPageProps) => {
  const router = useRouter()
  const [loading, {toggle}] = useDisclosure();

  const handleDelete = async() => {
    toggle()
    await deletePayment(deletedPayment.id)
    toggle()
    modalDelete()
    console.log("モーダル消すよ")
    router.push("/")
    router.refresh()
  }

  return (
    <div>
      <div className="text-xl my-2">{new Date(deletedPayment.pay_at).getMonth()+1}/{new Date(deletedPayment.pay_at).getDate()} {new Date(deletedPayment.pay_at).getHours().toString().padStart(2, '0')}:{new Date(deletedPayment.pay_at).getMinutes().toString().padStart(2, '0')}</div>
      <div className='text-xl my-2'>支払い方法:{deletedPayment.method}</div>
      <div className='text-xl my-2'>合計金額:{deletedPayment.price}</div>
      <div>（内訳）</div>
      {deletedPayment.products.map((paymentProduct) => (
        <div key={paymentProduct.id}>{paymentProduct.name} {paymentProduct.quantity}個 : {paymentProduct.unit_price * paymentProduct.quantity}</div>
      ))}
      <div className="mx-auto text-center">
        <Button variant="light" color='red' fullWidth loading={loading} onClick={handleDelete}>削除</Button>
      </div>
    </div>
  )
}

export default PaymentModal