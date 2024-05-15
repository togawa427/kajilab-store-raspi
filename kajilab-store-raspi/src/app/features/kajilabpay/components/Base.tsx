"use client"
import { getUser } from "@/api"
import { User } from "@/types/json"
import * as Kajilabpay from "@/app/features/kajilabpay/components/Index"
import { Button, rem } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronsLeft, IconLoader2 } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Base = () => {
  const [loading, {toggle}] = useDisclosure();
  const [scannedBarcode, setScanedBarcode] = useState("")
  const [chargeAmount, setChargeAmount] = useState(1000);
  const [kajilabpayMode, setKajilabpayMode] = useState(0);
  const [user, setUser] = useState<User>();
  const router = useRouter();

  // バーコードをスキャンした時の処理
  const handleScanBarcode = async (barcode: number) => {
    const scannedUser = await getUser(String(barcode));
    if(scannedUser.id != null){
      // 該当のユーザがヒットした時のみ編集画面へ
      setUser(scannedUser)
      setKajilabpayMode(1)
    }
    // const scannedProduct = await getProductByBarcode(barcode);
    // if(scannedProduct.id != null){
    //   // 該当の商品がヒットした時のみ編集画面へ
    //   setProduct(scannedProduct)
    //   form.setValues({
    //     newBarcode: scannedProduct.barcode,
    //     newName: scannedProduct.name,
    //     newPrice: scannedProduct.price,
    //     newStock: scannedProduct.stock,
    //     newTagId: scannedProduct.tag_id,
    //   })
    //   setEditMode(1)
    // }
  }
  
  // 現金で「投入完了」を押した時の処理
  const handleCashPayButton= async () => {
    // changePrepaidMode()
    if(!loading){
      toggle
      console.log("チャージ！！")
      // const status = await createPayment(buyProducts, "cash")
      toggle
      router.push("/")
      router.refresh()
    }
  }

  if(kajilabpayMode == 0){
    return(
      <div>
        <div className="mt-2">
          <Link href={"/"}>
          <Button variant="light" color="gray" className="mt-5">
              <IconChevronsLeft/><div className="text-xl">キャンセル</div>
          </Button>
          </Link>
        </div>
        <Kajilabpay.ScanUserBarcode
          handleScanBarcode={handleScanBarcode}
          barcode={scannedBarcode}
          setBarcode={setScanedBarcode}
        />
        <div className="text-center items-center mt-10">
          <div className="text-7xl font-bold p-3">梶研Payカードを</div>
          <div className="text-7xl font-bold p-3">スキャンしてください</div>
          <Image
            className="mx-auto mt-10"
            src="/kjlbcard-scanmethod.jpg"
            width={700}
            height={300}
            alt="Picture of kajilabpay scan method"
          />
        </div>
      </div>
    )
  }else if(kajilabpayMode == 1 && user){
    return (
      <div>
        <div className="mt-2">
          <Link href={"/"}>
          <Button variant="light" color="gray" className="mt-5">
              <IconChevronsLeft/><div className="text-xl">キャンセル</div>
          </Button>
          </Link>
          <div className="flex">
            <div className="text-center flex-auto">
              <p className="text-6xl font-bold">チャージ金額</p>
              <p className="text-8xl font-bold mt-5">{chargeAmount}円</p>
            </div>
            <div className="text-center bg-white bg-opacity-70 rounded-lg px-5 py-3">
              <p className="text-2xl">togawaの残高</p>
              <p className="text-2xl">現在</p>
              <p className="text-2xl">{user.debt}円</p>
              <p className="text-2xl">チャージ後</p>
              {(user.debt + chargeAmount) < 2000 ? ( 
                <p className="text-2xl">{user.debt + chargeAmount}円</p>
              ) : (
                <p className="text-2xl text-red-500">{user.debt + chargeAmount}円(上限オーバー)</p>
              )}
            </div>
          </div>
          <div className="pt-10 text-center">
            <div className="mt-10 text-4xl font-bold">チャージ金額分を投入したら下のボタンを押してください</div>
            <div className="mt-2 text-6xl">↓</div>
            <div className="mt-2">
              {(user.debt + chargeAmount) < 2000 ? ( 
                <button className="w-10/12 h-48 bg-celadon-100 rounded-xl shadow-xl active:bg-celadon-200" onClick={handleCashPayButton}>
                  {loading ? (
                    <div className="flex justify-center animate-spin">
                      <IconLoader2
                        style={{ width: rem(100), height: rem(100) }}
                      />
                    </div> // くるくるの要素
                  ) : (
                    <div className="text-8xl font-extrabold">チャージ</div> // 通常のボタンのテキスト
                  )}
                </button>
              ) : (
                <button className="w-10/12 h-48 bg-red-500 rounded-xl shadow-xl pointer-events-none">
                  <p className="text-6xl text-white">2000円以上は保有できません</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Base