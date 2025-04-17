"use client"
import * as Admin from "@/app/features/admin/components/Index"
import { Arrival } from '@/types/json';
import { Button, Modal, Table } from '@mantine/core'
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from 'react'

type ArrivalListProps = {
    arrivals: Arrival[];
}

const ArrivalList = ({arrivals}: ArrivalListProps) => {

    const [opened, { open, close }] = useDisclosure(false);
    const [deletedArrival, setDeletedArrival] = useState<Arrival>({
        id:0,
        money:0,
        value:0,
        arrive_at:new Date('2024-02-09T13:55:26.144836+09:00'),
        products:[]
      })

    const handleDelete = (handleArrival: Arrival) => {
        // setDeletedPayment(payments[paymentId])
        setDeletedArrival(handleArrival)
        console.log(deletedArrival)
        console.log("モーダル出現")
        open()
      };

  return (
    <div>
        <Modal opened={opened} onClose={close} title="削除の確認">
            <Admin.ArrivalModal deletedArrival={deletedArrival} modalDelete={close}/>
        </Modal>
        <div className="border-4 border-amber-300 shadow rounded">
        <Table borderColor="#FCD34D" horizontalSpacing="xl" className="w-full text-3xl bg-yellow-100 border-4 border-amber-300 rounded">
        <Table.Tbody>
            {arrivals.map((arrival) => (
                <Table.Tr className="text-2xl" key={arrival.id}>
                    <Table.Td>{new Date(arrival.arrive_at).getMonth()+1}/{new Date(arrival.arrive_at).getDate()}</Table.Td>
                    <Table.Td>{new Date(arrival.arrive_at).getHours().toString().padStart(2, '0')}:{new Date(arrival.arrive_at).getMinutes().toString().padStart(2, '0')}</Table.Td>
                    <Table.Td>{arrival.value}円分</Table.Td>
                    <Table.Td>(出){arrival.money}円</Table.Td>
                    <Table.Td className="text-right"><Button onClick={() => handleDelete(arrival)}>取消</Button></Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
        </Table>
        </div>
    </div>
  )
}

export default ArrivalList