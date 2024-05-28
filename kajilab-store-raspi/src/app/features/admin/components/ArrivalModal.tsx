"use client"
import { deleteArrival } from '@/api';
import { Arrival } from '@/types/json';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import React from 'react'

type ArrivalModalProps = {
  deletedArrival: Arrival;
  modalDelete: () => void;
}

const ArrivalModal = ({deletedArrival, modalDelete}: ArrivalModalProps) => {
  const router = useRouter()
  const [loading, {toggle}] = useDisclosure();

  const handleDelete = async() => {
    toggle()
    await deleteArrival(deletedArrival.id)
    toggle()
    modalDelete()
    console.log("モーダル消すよ")
    router.push("/admin")
    router.refresh()
  }

  return (
    <div>
      <div className="text-xl my-2">{new Date(deletedArrival.arrive_at).getMonth()+1}/{new Date(deletedArrival.arrive_at).getDate()} {new Date(deletedArrival.arrive_at).getHours().toString().padStart(2, '0')}:{new Date(deletedArrival.arrive_at).getMinutes().toString().padStart(2, '0')}</div>
      <div className='text-xl my-2'>合計金額:{deletedArrival.value}</div>
      <div className='text-xl my-2'>出金額:{deletedArrival.money}</div>
      <div>（内訳）</div>
      {deletedArrival.products.map((arrivalProduct) => (
        <div key={arrivalProduct.id}>{arrivalProduct.name} {arrivalProduct.quantity}個</div>
      ))}
      <div className="mx-auto text-center">
        <Button variant="light" color='red' fullWidth loading={loading} onClick={handleDelete}>削除</Button>
      </div>
    </div>
  )
}

export default ArrivalModal