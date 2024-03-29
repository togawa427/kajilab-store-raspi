"use client"
import { ActionIcon, Button, NumberInput, ScrollArea, Table } from '@mantine/core'
import React from 'react'
import { Product } from '@/types/json'
import {IconTrash } from '@tabler/icons-react'
import { CartProduct } from '@/types/product'
import { removeCartProduct, updateCartProductQuantity } from '@/utils/product'

type CartProductsListProps = {
    cartProducts: CartProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const CartProductsList = ({cartProducts, setCartProducts}:CartProductsListProps) => {

    const handleRemoveProductButton = (productId: number) => {
        removeCartProduct(productId, cartProducts, setCartProducts)
    }
    // const handleChangeProductQuantity = (productId: number, quantity: number|string) => {
    //     let quantityNum:number = Number(quantity)
    //     updateCartProductQuantity(productId, cartProducts, quantityNum, setCartProducts)
    // }
    const handleIncrementProductQuantity = (cartProduct: CartProduct) => {
        let quantity = cartProduct.quantity+1
        updateCartProductQuantity(cartProduct.product.id, cartProducts, quantity, setCartProducts)
    }
    const handleDecrementProductQuantity = (cartProduct: CartProduct) => {
        let quantity = cartProduct.quantity-1
        updateCartProductQuantity(cartProduct.product.id, cartProducts, quantity, setCartProducts)
    }

  return (
    <div className="border-4 border-amber-300 shadow rounded">
        <ScrollArea h={310} scrollbars="y" type="auto">
        <Table striped stripedColor="#FEFCE8" withColumnBorders borderColor="#FCD34D" horizontalSpacing="xl" className="w-full text-3xl bg-yellow-100 border-4 border-amber-300 rounded">
        <Table.Thead>
            <Table.Tr className="text-2xl">
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">商品名</div></Table.Th>
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">数(入荷後)</div></Table.Th>
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">単価</div></Table.Th>
                <Table.Th className="bg-[#B88F2C]"><div className="text-center text-white">売価計</div></Table.Th>
                <Table.Th className="w-5 bg-[#B88F2C]"><div className="text-center text-white">消去</div></Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {cartProducts.map((cartProduct) => (
                // <Table.Tr className="border-2 border-amber-300" key={payment.id}>
                <Table.Tr className="text-2xl" key={cartProduct.product.id}>
                    <Table.Td className="text-left">{cartProduct.product.name}</Table.Td>
                    <Table.Td className="text-center items-center flex">
                        <ActionIcon size={35} variant="default" onClick={() => handleDecrementProductQuantity(cartProduct)} className="flex-1">
                            <div className="text-xl">ー</div>
                        </ActionIcon>
                        <div className="flex-1">
                            {cartProduct.quantity} ({cartProduct.product.stock + cartProduct.quantity})
                            {/* <NumberInput
                                value={cartProduct.quantity}
                                onChange={(val) => handleChangeProductQuantity(cartProduct.product.id, val)}
                                max={1000}
                                min={0}
                                className="w-20 text-2xl"
                            /> */}
                        </div>
                        <ActionIcon size={35} variant="default" onClick={() => handleIncrementProductQuantity(cartProduct)} className="flex-1">
                            <div className="text-xl">＋</div>
                        </ActionIcon>
                        <div>
                        </div>
                    </Table.Td>
                    <Table.Td className="text-right">{cartProduct.product.price}</Table.Td>
                    <Table.Td className="text-right">{cartProduct.product.price * cartProduct.quantity}</Table.Td>
                    <Table.Td><Button color="black" onClick={() => handleRemoveProductButton(cartProduct.product.id)}><IconTrash/></Button></Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
        </Table>
        </ScrollArea>
    </div>
  )
}

export default CartProductsList