"use client"
import { getProductByBarcode, updateProduct } from '@/api'
import Barcode from '@/app/components/Barcode'
import ErrorPage from '@/app/components/ErrorPage'
import { Product } from '@/types/json'
import { ActionIcon, Button, NumberInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconChevronsLeft } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Base = () => {
  const [scannedBarcode, setScanedBarcode] = useState(0)
  const [product, setProduct] = useState<Product>();
  const [editMode, setEditMode] = useState(0);
  
  const handleScanBarcode = async (barcode: number) => {
    const scannedProduct = await getProductByBarcode(barcode);
    if(scannedProduct.id != null){
      // 該当の商品がヒットした時のみ編集画面へ
      setProduct(scannedProduct)
      form.setValues({
        newBarcode: scannedProduct.barcode,
        newName: scannedProduct.name,
        newPrice: scannedProduct.price,
        newStock: scannedProduct.stock,
        newTagId: scannedProduct.tag_id,
      })
      setEditMode(1)
    }
  }
  
  const handleIncrementPrice = (increasePrice: number) => {
    if(product != null){
      form.setValues({
        newBarcode: form.values.newBarcode,
        newName: form.values.newName,
        newPrice: form.values.newPrice + increasePrice,
        newStock: form.values.newStock,
        newTagId: form.values.newTagId,
      })
    }
  }

  const handleIncrementStock = (increaseStock: number) => {
    if(product != null){
      form.setValues({
        newBarcode: form.values.newBarcode,
        newName: form.values.newName,
        newPrice: form.values.newPrice,
        newStock: form.values.newStock + increaseStock,
        newTagId: form.values.newTagId,
      })
    }
  }

  const handleSubmitForm = async() => {
    if(product != null){
      updateProduct(
        product?.id,
        form.values.newName,
        form.values.newBarcode,
        form.values.newPrice,
        form.values.newStock,
        form.values.newTagId
      )
    }
    setEditMode(0)
  }

  const form = useForm({
    initialValues: {
      newBarcode: 0,
      newName: '',
      newPrice: 0,
      newStock: 0,
      newTagId: 0,
    },

    validate: {
      newBarcode: (value:number) => (value==0 ? "バーコードを入力してください": null),
      newName: (value:string) => (value.length > 12 ? "12文字以内で入力してください": null)
    }
  })

  if(editMode == 0){
    return(
      <div>
        <div className="mt-2">
          <Link href={"/admin"}>
          <Button variant="light" color="gray">
              <IconChevronsLeft/><div className="text-xl">キャンセル</div>
          </Button>
          </Link>
        </div>
        <Barcode
          handleScanBarcode={handleScanBarcode}
          barcode={scannedBarcode}
          setBarcode={setScanedBarcode}
        />
        <div className="text-center items-center mt-40">
          <div className="text-7xl font-bold p-3">情報を編集する商品を</div>
          <div className="text-7xl font-bold p-3">スキャンしてください</div>
        </div>
      </div>
    )
  }
  else if(editMode == 1) {
    return (
      <div>
        <div className="mt-2">
          <Button variant="light" color="gray" onClick={() => setEditMode(0)}>
              <IconChevronsLeft/><div className="text-xl">戻る</div>
          </Button>
        </div>
        <div className="flex mt-6">
          <div className="w-5/12 bg-yellow-100">
            <div className="p-5">
              <div className="text-3xl font-bold">
                変更前
              </div>
              <div>
                <NumberInput
                  label="バーコード"
                  size='md'
                  hideControls
                  disabled
                  value={product?.barcode}
                />
                <TextInput
                  label="商品名"
                  size="md"
                  disabled
                  value={product?.name}
                />
                <NumberInput
                  label="価格"
                  size="xl"
                  disabled
                  value={product?.price}
                />
                <NumberInput
                  label="在庫数"
                  size="xl"
                  disabled
                  value={product?.stock}
                />
              </div>
            </div>
          </div>
  
          <div className="w-2/12 text-8xl">
            <div className="ml-6 mt-32">
              →
            </div>
          </div>
          <div className="w-5/12 bg-yellow-100">
            <div className="p-5">
              <div className="text-3xl font-bold">
                変更後
              </div>
              <form onSubmit={form.onSubmit(handleSubmitForm)}>
                <NumberInput
                  label="バーコード"
                  size='md'
                  hideControls
                  {...form.getInputProps('newBarcode')}
                />
                <TextInput
                  label="商品名"
                  size='md'
                  {...form.getInputProps('newName')}
                />
                <div>価格</div>
                <div className="text-center items-center flex">
                  <ActionIcon size={50} variant="default" onClick={() => handleIncrementPrice(-10)} className="flex-1">
                    <div className="text-2xl">ー</div>
                  </ActionIcon>
                  <NumberInput
                    size='xl'
                    hideControls
                    {...form.getInputProps('newPrice')}
                  />
                  <ActionIcon size={50} variant="default" onClick={() => handleIncrementPrice(10)} className="flex-1">
                    <div className="text-2xl">＋</div>
                  </ActionIcon>
                </div>
  
                <div>在庫数</div>
                <div className="flex">
                  <ActionIcon size={50} variant="default" onClick={() => handleIncrementStock(-1)} className="flex-1">
                    <div className="text-2xl">＋</div>
                  </ActionIcon>
                  <NumberInput
                    size='xl'
                    hideControls
                    {...form.getInputProps('newStock')}
                  />
                  <ActionIcon size={50} variant="default" onClick={() => handleIncrementStock(1)} className="flex-1">
                    <div className="text-2xl">＋</div>
                  </ActionIcon>
                </div>
                {/* <NumberInput
                  label="在庫数"
                  size='xl'
                  {...form.getInputProps('newStock')}
                /> */}
                <Button type="submit" fullWidth size='xl' className="mt-5">
                  確定
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Base