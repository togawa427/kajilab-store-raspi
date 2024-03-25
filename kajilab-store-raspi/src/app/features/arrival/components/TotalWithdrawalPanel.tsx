import { NumberFormatter, NumberInput } from '@mantine/core';
import React from 'react'

type TotalWithdrawalPanelProps = {
  totalWithdrawal: number;
  setTotalWithDrawal: any;
}

const TotalWithdrawalPanel = ({totalWithdrawal, setTotalWithDrawal}: TotalWithdrawalPanelProps) => {
  return (
    <div className="bg-slate-300 w-80 flex border-4 border-amber-300 rounded">
      <div className="bg-[#B88F2C] text-3xl px-5 py-3 text-center text-white w-2/5 font-bold border-r-4 border-amber-300">出金</div>
      <NumberInput 
        className='bg-amber-100 text-3xl px-2 py-3 text-right font-bold w-3/5'
        value={totalWithdrawal} 
        onChange={setTotalWithDrawal}
      />
    </div>
  )
}

export default TotalWithdrawalPanel