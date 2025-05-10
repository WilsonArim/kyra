import Head from 'next/head';
import Layout from '../../components/Layout';
import React from 'react';

export default function AnaliseSol() {
  return (
    <Layout>
      <Head>
        <title>KyraCrypto - Análise Solana</title>
        <meta name="description" content="Secção de análise dedicada à blockchain Solana." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-8">
        <div className="bg-black/80 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-4">ANÁLISE - Solana</h1>
          <p className="text-lg text-gray-300">Conteúdo da análise em Solana será adicionado em breve.</p>
        </div>
      </div>
    </Layout>
  );
}