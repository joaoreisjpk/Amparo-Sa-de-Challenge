import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div
    /* style={{
        backgroundImage: 'url("/mainbkg.jpg")',
        backgroundSize: 'min(100%, 1200px)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'calc(100px - 100vh)',
        height: '100vh',
      }} */
    >
      <Head>
        <title> Home - Amparo Telefônica</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Box
        sx={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}
        ml='max(-20rem, -20vw)'
      >
        <Stack sx={{ width: '700px', gap: '1rem' }}>
          <Typography variant='h4' color='gray' fontWeight={600}>
            Ligações de um jeito simples e{' '}
            <span style={{ color: 'green' }}>eficiente.</span>
          </Typography>
          <Typography color='#555'>
            Você está na Amparo Telefônica, uma empresa com diversos planos que
            facilitam e dimuem seu custo em ligações. Venha receber um serviço
            que se encaixe na sua rotina.
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
