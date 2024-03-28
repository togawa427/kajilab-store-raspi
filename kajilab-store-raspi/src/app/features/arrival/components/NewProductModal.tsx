"use client"
import { createProduct, deleteArrival } from '@/api';
import { Arrival, Product } from '@/types/json';
import { Button, NumberInput, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type NewProductModalProps = {
  modalDelete: () => void;
  barcode: number;
}

const NewProductModal = ({modalDelete, barcode}: NewProductModalProps) => {
  const [loading, {toggle}] = useDisclosure();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleNewCreateProduct = async() => {
    toggle()
    modalDelete()
    createProduct(name, barcode, price, -1)
    toggle()
  }

  return (
    <div>
      <form>
        <div className='text-xl'>
          JAN: {barcode}
        </div>
        <TextInput
          label="商品名"
          placeholder="じゃがりこサラダ味"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <NumberInput
          label="価格"
          placeholder="100"
          value={price}
          onChange={(e) => setPrice(Number(e))}
        />
        <Button fullWidth onClick={handleNewCreateProduct} className="mt-5">登録</Button>
      </form>
    </div>
  )
}

export default NewProductModal