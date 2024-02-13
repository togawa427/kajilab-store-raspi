import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import * as Admin from "@/app/features/admin/components/Index"
// import ArrivalList from '../features/admin/components/ArrivalList'

const AdminHome = () => {
  return (
    <div>
        <div className="flex mt-10">
            <Link href={"/admin/arrival"} className="flex-1 mx-2 mr-10 h-fit">
                <Admin.ArrivalModeButton/>
            </Link>
            <Link href={"/product/1"} className="flex-1 mx-2 ml-10 h-fit">
                <Admin.EditModeButton/>
            </Link>
        </div>
        <div className="mt-10">
            <Admin.ArrivalList/>
        </div>
        <div className="absolute bottom-5">
        <Link href={"/"}>
          <Button fullWidth variant="filled" color='blue'>購入モード</Button>
        </Link>
      </div>
    </div>
  )
}

export default AdminHome