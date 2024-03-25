import Image from 'next/image'
import { TextInput, Checkbox, Button, Group, Box, MantineProvider } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { getPayments } from '@/api';
import RootPage from './components/RootPage';
// import '@mantine/core/styles.css';
// import { useClient } from 'react'; // 追加: useClientをインポート

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {

  const payments = await getPayments();
  console.log(payments)
  console.log(payments[0].products)

  return (
    <RootPage payments={payments}/>
  )
}
