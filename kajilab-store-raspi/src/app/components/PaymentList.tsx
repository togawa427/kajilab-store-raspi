"use client"
import { Payment } from '@/types/json'
import { Button, TableTbody, Table, TableTr, MultiSelect, Select} from '@mantine/core';
import React, { useEffect, useState } from 'react'

type PaymentListProps = {
    payments: Payment[];
}

const PaymentList = ({payments}:PaymentListProps) => {
  return (
    <div>
        <Table className="w-full text-3xl bg-yellow-100 shadow rounded">
        <Table.Tbody>
            {payments.map((payment) => (
                // <Table.Tr className="border-2 border-amber-300" key={payment.id}>
                <Table.Tr key={payment.id}>
                    <Table.Td className="">{new Date(payment.pay_at).getMonth()+1}/{new Date(payment.pay_at).getDate()}</Table.Td>
                    <Table.Td>{new Date(payment.pay_at).getHours().toString().padStart(2, '0')}:{new Date(payment.pay_at).getMinutes().toString().padStart(2, '0')}</Table.Td>
                    <Table.Td>{payment.products[0] ? payment.products[0].name:''}{payment.products[1] ? ' など':''}</Table.Td>
                    <Table.Td>{payment.price}円</Table.Td>
                    <Table.Td><Button>取消</Button></Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
        </Table>
    </div>
  )
}

export default PaymentList