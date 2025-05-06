import React from 'react';
import Layout from '../components/Layout';

export default function Videos() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen pt-32">
        <h1 className="text-4xl font-bold text-white mb-6">Dicas rápidas e Notícias Cripto</h1>
        <div className="flex flex-row gap-8 mb-8">
          <a href="/dicas-rapidas" className="px-8 py-4 rounded-lg bg-[#F7B92A] text-[#0A0720] font-bold text-xl shadow hover:bg-[#e0a81a] transition">Dicas rápidas</a>
          <a href="/noticias-cripto" className="px-8 py-4 rounded-lg bg-blue-400 text-white font-bold text-xl shadow hover:bg-blue-500 transition">Notícias Cripto</a>
        </div>
        <div className="bg-black bg-opacity-70 px-8 py-4 rounded-lg shadow-lg">
          <span className="text-white text-xl">Em breve</span>
        </div>
      </div>
    </Layout>
  );
} 