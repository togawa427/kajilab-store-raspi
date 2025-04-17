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
  setBarcode: React.Dispatch<React.SetStateAction<number>>;
}

const NewProductModal = ({modalDelete, barcode, setBarcode}: NewProductModalProps) => {
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
        <div className='mb-3 text-xl'>
          JAN: {barcode}
        </div>
        <TextInput
          size='md'
          label="商品名"
          placeholder="じゃがりこサラダ味(12文字以内)"
          error={name.length > 12 || name.length == 0 ? "商品名を12文字以内で入力してください" : ""}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <NumberInput
          size='md'
          label="価格"
          placeholder="100"
          value={price}
          error={price == 0 ? "価格を設定してください": ""}
          onChange={(e) => {
            setPrice(Number(e))
            setBarcode(0)
          }}
        />
        <Button
          fullWidth
          onClick={() => {
            if(!(name.length > 12 || name.length == 0 || price == 0)){
              console.log("条件満たしてるボタンタップ")
              handleNewCreateProduct()
            }
          }}
        >
          登録
        </Button>
      </form>
    </div>
  )
}

export default NewProductModal