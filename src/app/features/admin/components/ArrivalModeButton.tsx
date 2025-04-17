import React from 'react'
import {IconTruck} from '@tabler/icons-react'
import { rem } from '@mantine/core'

const ArrivalModeButton = () => {
  return (
    <button className="w-full h-52 bg-redorange-200 rounded-lg shadow active:bg-redorange-300">
        <IconTruck style={{ width: rem(120), height: rem(120) }} color='white' className="mx-auto"/>
        <div className="text-white text-5xl font-bold">
            入荷モード
        </div>
    </button>
  )
}

export default ArrivalModeButton