import Head from 'next/head';
import Header from '../../components/Header/';
import { pricesData } from '../../interfaces';
import SelectForm from './_SelectForm';
import Table from './_Table';

export default function Calculadora({ data }: pricesData): JSX.Element {
  return (
    <div>
      <Head>
        <title> Calculadora - Amparo Telefônica</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <h1>Calculadora</h1>
      <SelectForm data={data} />
      <Table />
    </div>
  );
}

import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const prices = [
    {
      id: 1,
      origem: '011',
      destino: '016',
      price: 1.9,
    },
    {
      id: 2,
      origem: '011',
      destino: '017',
      price: 1.7,
    },
    {
      id: 3,
      origem: '011',
      destino: '018',
      price: 0.9,
    },
    {
      id: 5,
      origem: '016',
      destino: '011',
      price: 2.9,
    },
    {
      id: 6,
      origem: '017',
      destino: '011',
      price: 2.7,
    },
    {
      id: 7,
      origem: '018',
      destino: '011',
      price: 1.9,
    },
  ];
  return {
    props: {
      data: prices,
    },
    revalidate: 15 * 60 * 60,
  };
};
