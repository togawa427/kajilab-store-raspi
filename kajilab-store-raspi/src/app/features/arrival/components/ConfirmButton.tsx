import React from 'react'

type ConfirmButtonProps = {
  handleConfirmButton: any;
}

const ConfirmButton = ({handleConfirmButton}: ConfirmButtonProps) => {
  return (
    <button className="w-5/12 mr-28 bg-redorange-100 rounded-xl shadow active:bg-redorange-200" onClick={handleConfirmButton}>
        <p className="text-5xl font-bold">確定する</p>
        {/* <p className="text-4xl font-bold">（現金）</p> */}
    </button>
  )
}

export default ConfirmButton