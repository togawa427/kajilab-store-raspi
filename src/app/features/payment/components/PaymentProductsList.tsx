"use client"
import { ActionIcon, Button, NumberInput, ScrollArea, Table } from '@mantine/core'
import React from 'react'
import {IconTrash } from '@tabler/icons-react'
import { BuyProduct } from '../type'
import { removeCartProduct, updateCartProductQuantity } from '@/utils/product'
import { useRouter } from 'next/navigation'

type PaymentProductsListProps = {
    buyProducts: BuyProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<BuyProduct[]>>;
}

const PaymentProductsList = ({buyProducts, setCartProducts}:PaymentProductsListProps) => {
    const router = useRouter();

    const checkEmptyCartProducts = (cartProducts: BuyProduct[]) => {
        if(cartProducts.length == 0){
            router.push("/")
            router.refresh()
        }
    }

    const handleRemoveProductButton = (productId: number) => {
        let afterCartProducts = removeCartProduct(productId, buyProducts, setCartProducts)
        checkEmptyCartProducts(afterCartProducts)
    }

    const handleIncrementProductQuantity = (buyProduct: BuyProduct) => {
        let quantity = buyProduct.quantity+1
        let afterCartProducts = updateCartProductQuantity(buyProduct.product.id, buyProducts, quantity, setCartProducts)
        checkEmptyCartProducts(afterCartProducts)
    }

    const handleDecrementProductQuantity = (buyProduct: BuyProduct) => {
        let quantity = buyProduct.quantity-1
        let afterCartProducts
        if(quantity <= 0){
            // 数が0以下になったらカートから削除する
            afterCartProducts = removeCartProduct(buyProduct.product.id, buyProducts, setCartProducts)
        }else{
            afterCartProducts = updateCartProductQuantity(buyProduct.product.id, buyProducts, quantity, setCartProducts)
        }
        checkEmptyCartProducts(afterCartProducts)
    }

  return (
    <div className="border-4 border-amber-300 shadow rounded">
        <ScrollArea h={310} scrollbars="y" type="auto">
        <Table striped stripedColor="#FEFCE8" withColumnBorders borderColor="#FCD34D" horizontalSpacing="xl" className="w-full text-3xl bg-yellow-100 border-4 border-amber-300 rounded">
        <Table.Thead>
            <Table.Tr className="text-2xl">
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">商品名</div></Table.Th>
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">数</div></Table.Th>
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">単価</div></Table.Th>
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">売価計</div></Table.Th>
                <Table.Th className="w-5 bg-[#B88F2C]"><div className="text-center text-white">消去</div></Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {buyProducts.map((buyProduct) => (
                // <Table.Tr className="border-2 border-amber-300" key={payment.id}>
                <Table.Tr className="text-2xl" key={buyProduct.product.id}>
                    <Table.Td className="text-left">{buyProduct.product.name}</Table.Td>
                    <Table.Td className="text-center items-center flex">
                        <ActionIcon size={35} variant="default" onClick={() => handleDecrementProductQuantity(buyProduct)} className="flex-1">
                            <div className="text-xl">ー</div>
                        </ActionIcon>
                        <div className="flex-1">
                            {buyProduct.quantity}
                            {/* <NumberInput
                                value={buyProduct.quantity}
                                onChange={(val) => handleChangeProductQuantity(buyProduct.product.id, val)}
                                max={1000}
                                min={0}
                                className="w-20 text-2xl"
                            /> */}
                        </div>
                        <ActionIcon size={35} variant="default" onClick={() => handleIncrementProductQuantity(buyProduct)} className="flex-1">
                            <div className="text-xl">＋</div>
                        </ActionIcon>
                    </Table.Td>
                    <Table.Td className="text-right">{buyProduct.product.price}</Table.Td>
                    <Table.Td className="text-right">{buyProduct.product.price * buyProduct.quantity}</Table.Td>
                    <Table.Td><Button color="black" onClick={() => handleRemoveProductButton(buyProduct.product.id)}><IconTrash/></Button></Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
        </Table>
        </ScrollArea>
    </div>
  )
}

export default PaymentProductsList