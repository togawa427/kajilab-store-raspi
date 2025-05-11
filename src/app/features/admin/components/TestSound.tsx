"use client"
import { Button } from '@mantine/core'
import React from 'react'
import useSound from 'use-sound';

export default function TestSound() {
  const [playCashSound] = useSound("/cashpay.mp3", {
    interrupt: true
  });

  const [playKajilabPaySound] = useSound("/kajilabpay.mp3", {
    interrupt: true
  });

  const [playKajilabChargeSound] = useSound("/kajilabcharge.mp3", {
    interrupt: true
  });

  return (
    <div className='bg-slate-100 w-fit p-1 border-2 border-black'>
      <p className='text-center font-bold'>音声テスト</p>
      <div className='mt-1'><Button onClick={playCashSound} fullWidth size='xs' color='gray'>現金支払い</Button></div>
      <div className='mt-1'><Button onClick={playKajilabPaySound} fullWidth size='xs' color='gray'>梶研Pay支払い</Button></div>
      <div className='mt-1'><Button onClick={playKajilabChargeSound} fullWidth size='xs' color='gray'>梶研Payチャージ</Button></div>
    </div>
  )
}
