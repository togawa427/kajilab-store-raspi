"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type InputBarcodePageProps = {
  setBuyBarcode: any;
}

const InputBarcode = ({setBuyBarcode}: InputBarcodePageProps) => {
  const [barcode, setBarcode] = useState(0);
  const [cntEnter, setCtnEnter] = useState(0);
  const router = useRouter();
  // const [barcodeArray, setBarcodeArray] = useState([12345678]);

  // const addBarcode = (inputedBarcode:number) => {
  //   setBarcodeArray(prevArray => [...prevArray, inputedBarcode])
  // }

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      // バーコードリーダーからの入力は通常Enterキーで終了する
      if (event.key === 'Enter') {
        handleBarcode(barcode);
        setBuyBarcode(barcode.toString());
        setBarcode(0); // バーコードをクリア
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

  const handleBarcode = (scannedBarcode:any) => {
    // バーコードがスキャンされたときの処理
    console.log('Scanned Barcode:', scannedBarcode);
    // ここで必要な処理を追加する
  };

  return (
    <div>
      <p>Scanned Barcode: {barcode}</p>
    </div>
  )
}

export default InputBarcode