"use client"
import { Payment } from '@/types/json'
import { Button, TableTbody, Table, TableTr, MultiSelect, Select, Modal} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import PaymentModal from './PaymentModal';

type PaymentListProps = {
    payments: Payment[];
}

const PaymentList = ({payments}:PaymentListProps) => {

  const [opened, { open, close }] = useDisclosure(false);
  const [deletedPayment, setDeletedPayment] = useState<Payment>({
    id:0,
    price:0,
    pay_at:new Date('2024-02-09T13:55:26.144836+09:00'),
    method:"",
    user_name:"",
    products:[]
  })

  const handleDelete = (handlePayment: Payment) => {
    // setDeletedPayment(payments[paymentId])
    setDeletedPayment(handlePayment)
    console.log(deletedPayment)
    console.log("モーダル出現")
    open()
  };

  return (
    <div>
        <Modal opened={opened} onClose={close} title="削除の確認">
            <PaymentModal deletedPayment={deletedPayment}/>
        </Modal>
        <div className="border-4 border-amber-300 shadow rounded">
        <Table borderColor="#FCD34D" horizontalSpacing="xl" className="w-full text-3xl bg-yellow-100 border-4 border-amber-300 rounded">
        <Table.Tbody>
            {payments.map((payment) => (
                // <Table.Tr className="border-2 border-amber-300" key={payment.id}>
                <Table.Tr className="text-2xl" key={payment.id}>
                    <Table.Td>{new Date(payment.pay_at).getMonth()+1}/{new Date(payment.pay_at).getDate()}</Table.Td>
                    <Table.Td>{new Date(payment.pay_at).getHours().toString().padStart(2, '0')}:{new Date(payment.pay_at).getMinutes().toString().padStart(2, '0')}</Table.Td>
                    <Table.Td>{payment.products[0] ? payment.products[0].name:''}{payment.products[1] ? ' など':''}</Table.Td>
                    <Table.Td>{payment.price}円</Table.Td>
                    <Table.Td className="text-right"><Button onClick={() => {handleDelete(payment)}}>取消</Button></Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
        </Table>
        </div>
    </div>
  )
}

export default PaymentList