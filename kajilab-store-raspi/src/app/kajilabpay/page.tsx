import React from 'react'
import * as Kajilabpay from "@/app/features/kajilabpay/components/Index"
import { getUser } from '@/api'

export default async function KajilabpayPage() {

  // const product = await getProductByBarcode();
  // console.log(product)
  const user = await getUser();

  return (
      <div>
          <Kajilabpay.Base user={user}/>
      </div>
  )
}