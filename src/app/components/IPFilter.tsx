"use client"
import React, { FC, ReactNode } from 'react'
import { useIPFilter } from '../hooks/useIPFilter';

type Props = {
  children: ReactNode;
};

const IPFilter: FC<Props> = ({ children }) => {
  const { isWhiteIP } = useIPFilter()
  if(isWhiteIP === undefined){
    return <div>アクセス権限確認中</div>
  }
  if (!isWhiteIP) {
    return <div>アクセス権限がありません</div>
  }
  return (
    <div>{children}</div>
  )
}

export default IPFilter