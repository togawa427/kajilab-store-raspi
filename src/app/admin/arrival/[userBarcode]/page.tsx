import React from 'react'
import * as Arrival from "@/app/features/arrival/components/Index"

const ArrivalPage = ({params}: {params: {userBarcode: string}}) => {
  return (
    <Arrival.Base userBarcode={params.userBarcode}/>
)
}

export default ArrivalPage