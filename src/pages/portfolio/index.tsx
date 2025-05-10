import Head from 'next/head';
import Layout from '../../components/Layout';
import React from 'react';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>KyraCrypto - Portfolio</title>
        <meta name="description" content="Secção dedicada à gestão e visualização do portfólio de criptomoedas." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-8">
        <div className="bg-black/80 rounded-xl px-8 py-6 shadow-lg flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-4">PORTFOLIO</h1>
          <p className="text-lg text-gray-300">Conteúdo da secção Portfolio será adicionado em breve.</p>
        </div>
      </div>
    </Layout>
  );
}
