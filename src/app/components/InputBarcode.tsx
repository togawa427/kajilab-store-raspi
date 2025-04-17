"use client"
import { getProductByBarcode } from '@/api';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Notifications, notifications } from '@mantine/notifications';

const InputBarcode = () => {
  const [barcode, setBarcode] = useState(0);
  const router = useRouter();

  const isExistProduct = async (barcode: number) => {
    const buyProduct = await getProductByBarcode(Number(barcode))
    if(buyProduct.id == null){
      return false
    }
    return true
  }

  const handleBarcode = async(scannedBarcode:number) => {
    // バーコードがスキャンされたときの処理
    console.log('Scanned Barcode:', scannedBarcode);
    // ここで必要な処理を追加する
    setBarcode(0); // バーコードをクリア
    if(await isExistProduct(scannedBarcode)){
      // バーコードが存在するときはカートの画面へ遷移
      router.push(`/payment?barcode=${scannedBarcode}`)
      router.refresh()
    }
    else{
      // バーコードが存在しないときは警告のポップアップを出す
      notifications.show({
        title: "存在しないバーコード",
        message: "未登録のバーコードが読み込まれました",
        color:"red",
        style: (theme) => ({
          style: { backgroundColor: 'red' }
        })
      })
    }
  };

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      // バーコードリーダーからの入力は通常Enterキーで終了する
      if (event.key === 'Enter') {
        let formattedBarcode = Number(barcode)
        handleBarcode(formattedBarcode);
      } else {
        // キーボードからの通常の入力をバーコードに追加
        setBarcode((prev) => prev + event.key);
      }
    };

    // イベントリスナーを追加
    window.addEventListener('keypress', handleKeyPress);

    // コンポーネントがアンマウントされたときにイベントリスナーを解除
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [barcode]);

  return (
    <div>
      <p>Scanned Barcode: {barcode}</p>
    </div>
  )
}

export default InputBarcode