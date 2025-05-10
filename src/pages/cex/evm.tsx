import Head from 'next/head';
import Layout from '../../components/Layout';
import React from 'react';

export default function CexEvm() {
  return (
    <Layout>
      <Head>
        <title>KyraCrypto - CEX EVM</title>
        <meta name="description" content="Secção CEX referente a blockchains compatíveis com EVM." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-8">
        <div className="bg-black/80 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-4">CEX - EVM</h1>
          <p className="text-lg text-gray-300">Conteúdo da CEX em EVM será adicionado em breve.</p>
        </div>
      </div>
    </Layout>
  );
}
