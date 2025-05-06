import React from 'react';
import Layout from '../components/Layout';

export default function Iniciante() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-6">Iniciante</h1>
        <div className="bg-black bg-opacity-70 px-8 py-4 rounded-lg shadow-lg">
          <span className="text-white text-xl">Em breve</span>
        </div>
      </div>
    </Layout>
  );
} 