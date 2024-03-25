import { NumberFormatter } from '@mantine/core';
import React from 'react'

type TotalPricePanelProps = {
    totalPrice: number;
}


const TotalPricePanel = (totalPrice: TotalPricePanelProps) => {
  return (
    <div className="bg-slate-300 w-80 flex border-4 border-amber-300 rounded">
            <div className="bg-[#B88F2C] text-3xl px-5 py-3 text-center text-white w-2/5 font-bold border-r-4 border-amber-300">合計</div>
            <div className="bg-amber-100 text-3xl px-2 py-3 text-right font-bold w-3/5"><NumberFormatter prefix='￥' value={totalPrice.totalPrice} thousandSeparator/></div>
    </div>
  )
}

export default TotalPricePanel