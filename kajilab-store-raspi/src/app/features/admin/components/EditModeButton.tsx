import React from 'react'
import {IconDatabaseEdit} from '@tabler/icons-react'
import { rem } from '@mantine/core'

const EditModeButton = () => {
  return (
    <button className="w-full h-52 bg-celadon-200 rounded-lg shadow active:bg-celadon-300">
        <IconDatabaseEdit style={{ width: rem(110), height: rem(110) }} color='white' className="mx-auto"/>
        <div className="text-white text-5xl font-bold mt-3">
            編集モード
        </div>
    </button>
  )
}

export default EditModeButton