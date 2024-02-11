import Image from 'next/image'
import { TextInput, Checkbox, Button, Group, Box, MantineProvider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormEventHandler } from 'react';
import React, {useEffect, useState} from 'react';
import PaymentList from './components/PaymentList';
import { getPayments } from '@/api';
// import '@mantine/core/styles.css';
// import { useClient } from 'react'; // 追加: useClientをインポート

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  // const [barcode, setBarcode] = useState(0);
  // const [cntEnter, setCtnEnter] = useState(0);
  // const [barcodeArray, setBarcodeArray] = useState([12345678]);

  // const addBarcode = (inputedBarcode:number) => {
  //   setBarcodeArray(prevArray => [...prevArray, inputedBarcode])
  // }

  // useEffect(() => {
  //   const handleKeyPress = (event:any) => {
  //     // バーコードリーダーからの入力は通常Enterキーで終了する
  //     if (event.key === 'Enter') {
  //       handleBarcode(barcode);
  //       addBarcode(barcode)
  //       setBarcode(0); // バーコードをクリア
  //     } else {
  //       // キーボードからの通常の入力をバーコードに追加
  //       setBarcode((prev) => prev + event.key);
  //     }
  //   };

  //   // イベントリスナーを追加
  //   window.addEventListener('keypress', handleKeyPress);

  //   // コンポーネントがアンマウントされたときにイベントリスナーを解除
  //   return () => {
  //     window.removeEventListener('keypress', handleKeyPress);
  //   };
  // }, [barcode]);

  // const handleBarcode = (scannedBarcode:any) => {
  //   // バーコードがスキャンされたときの処理
  //   console.log('Scanned Barcode:', scannedBarcode);
  //   console.log(barcodeArray)
  //   // ここで必要な処理を追加する
  // };

  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <div>
  //       バーコードテスト
  //       <p>Scanned Barcode: {barcode}</p>
  //       <ul>
  //         {barcodeArray.map((b, index) => (
  //           <li key={index}>{b}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </main>
  // )

  const payments = await getPayments();
  console.log(payments)
  console.log(payments[0].products)

  return (
    <div>
      <div className="text-right mt-2 mb-5">
        {/* <button className="bg-red-500 rounded py-1 px-2 text-slate-50 #__next">同期</button> */}
        <Button color='red'>同期</Button>
      </div>
      <p className="text-center text-7xl mt-10">商品をスキャンしてください</p>
      <div className="mt-20">
        <PaymentList payments={payments}/>
      </div>
      <div className="absolute bottom-5">
        <Button fullWidth variant="filled" color='red'>商店係モード</Button>
      </div>
    </div>
  )
}
