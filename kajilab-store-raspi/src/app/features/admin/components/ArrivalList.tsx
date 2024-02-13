"use client"
import { Button, Table } from '@mantine/core'
import React from 'react'

const ArrivalList = () => {
  return (
    <div>
        <div className="border-4 border-amber-300 shadow rounded">
        <Table borderColor="#FCD34D" horizontalSpacing="xl" className="w-full text-3xl bg-yellow-100 border-4 border-amber-300 rounded">
        <Table.Tbody>
            {/* {payments.map((payment) => (
                // <Table.Tr className="border-2 border-amber-300" key={payment.id}>
                <Table.Tr className="text-2xl" key={payment.id}>
                    <Table.Td>{new Date(payment.pay_at).getMonth()+1}/{new Date(payment.pay_at).getDate()}</Table.Td>
                    <Table.Td>{new Date(payment.pay_at).getHours().toString().padStart(2, '0')}:{new Date(payment.pay_at).getMinutes().toString().padStart(2, '0')}</Table.Td>
                    <Table.Td>{payment.products[0] ? payment.products[0].name:''}{payment.products[1] ? ' など':''}</Table.Td>
                    <Table.Td>{payment.price}円</Table.Td>
                    <Table.Td className="text-right"><Button>取消</Button></Table.Td>
                </Table.Tr>
            ))} */}
            <Table.Tr className="text-2xl" key="1">
                <Table.Td>12/1</Table.Td>
                <Table.Td>20:18</Table.Td>
                <Table.Td>じゃがりこなど</Table.Td>
                <Table.Td>2000円</Table.Td>
                <Table.Td className="text-right"><Button>取消</Button></Table.Td>
            </Table.Tr>
            <Table.Tr className="text-2xl" key="2">
                <Table.Td>12/1</Table.Td>
                <Table.Td>20:18</Table.Td>
                <Table.Td>じゃがりこなど</Table.Td>
                <Table.Td>2000円</Table.Td>
                <Table.Td className="text-right"><Button>取消</Button></Table.Td>
            </Table.Tr>
            <Table.Tr className="text-2xl" key="3">
                <Table.Td>12/1</Table.Td>
                <Table.Td>20:18</Table.Td>
                <Table.Td>じゃがりこなど</Table.Td>
                <Table.Td>2000円</Table.Td>
                <Table.Td className="text-right"><Button>取消</Button></Table.Td>
            </Table.Tr>
            <Table.Tr className="text-2xl" key="4">
                <Table.Td>12/1</Table.Td>
                <Table.Td>20:18</Table.Td>
                <Table.Td>じゃがりこなど</Table.Td>
                <Table.Td>2000円</Table.Td>
                <Table.Td className="text-right"><Button>取消</Button></Table.Td>
            </Table.Tr>
        </Table.Tbody>
        </Table>
        </div>
    </div>
  )
}

export default ArrivalList