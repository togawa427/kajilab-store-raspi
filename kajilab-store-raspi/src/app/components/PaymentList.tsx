"use client"
import { Payment } from '@/types/json'
import { Button } from '@mantine/core';
import React, { useEffect, useState } from 'react'

type PaymentListProps = {
    payments: Payment[];
}

const PaymentList = ({payments}:PaymentListProps) => {
  return (
    <div>
        <table className="w-full text-3xl bg-yellow-100 shadow rounded">
        <tbody>
            {payments.map((payment) => (
                <tr className="border-2 border-amber-300" key={payment.id}>
                    <td className="py-2 px-4">{new Date(payment.pay_at).getMonth()+1}/{new Date(payment.pay_at).getDate()}</td>
                    <td>{new Date(payment.pay_at).getHours().toString().padStart(2, '0')}:{new Date(payment.pay_at).getMinutes().toString().padStart(2, '0')}</td>
                    <td>{payment.products[0] ? payment.products[0].name:''}{payment.products[1] ? ' など':''}</td>
                    <td>{payment.price}円</td>
                    <td><Button>取消</Button></td>
                </tr>
            ))}
            {/* <tr key={1} className="border-2 border-slate-300">
                <td className="">1/9 14:21</td>
                <td>じゃがりこサラダ味</td>
                <td>120円</td>
                <td>取消</td>
            </tr>
            <tr key={2} className="border-2 border-slate-300">
                <td>1/9 14:21</td>
                <td>じゃがりこサラダ味</td>
                <td>120円</td>
                <td>取消</td>
            </tr>
            <tr key={3} className="border-2 border-slate-300">
                <td>1/9 14:21</td>
                <td>じゃがりこ味</td>
                <td>120円</td>
                <td>取消</td>
            </tr> */}
        </tbody>
        </table>
    </div>
  )
}

export default PaymentList