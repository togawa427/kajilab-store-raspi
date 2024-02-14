"use client"
import { Button, ScrollArea, Table } from '@mantine/core'
import React from 'react'
import { Product } from '@/types/json'
import {IconTrash } from '@tabler/icons-react'
import { BuyProduct } from '../type'

type PaymentProductsListProps = {
    buyProducts: BuyProduct[];
}

const PaymentProductsList = ({buyProducts}:PaymentProductsListProps) => {
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
                    <Table.Td className="text-right">{buyProduct.quantity}</Table.Td>
                    <Table.Td className="text-right">{buyProduct.product.price}</Table.Td>
                    <Table.Td className="text-right">{buyProduct.product.price * buyProduct.quantity}</Table.Td>
                    <Table.Td><Button color="gray"><IconTrash/></Button></Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
        </Table>
        </ScrollArea>
    </div>
  )
}

export default PaymentProductsList