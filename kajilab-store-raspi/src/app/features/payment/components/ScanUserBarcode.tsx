"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type InputBarcodePageProps = {
  barcode: string;
  setBarcode: React.Dispatch<React.SetStateAction<string>>;
  handleScanBarcode: any;
}

const ScanUserBarcode = ({handleScanBarcode, barcode, setBarcode}: InputBarcodePageProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      // バーコードリーダーからの入力は通常Enterキーで終了する
      if (event.key === 'Enter') {
        handleBarcode(barcode);
      }
      else if(event.key === ' ') {
        setBarcode("")
      }
      else {
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
    handleScanBarcode(scannedBarcode);
    setBarcode(""); // バーコードをクリア
    //setBuyBarcode(barcode);
  };

  return (
    <div>
      <p>Scanned Barcode: {barcode}(スペースでリセット)</p>
    </div>
  )
}

export default ScanUserBarcode