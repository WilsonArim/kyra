import React, { useState } from 'react';
import Layout from '../components/Layout';

const perguntasFAQ = [
  {
    pergunta: 'O que é uma criptomoeda?',
    resposta: 'Uma criptomoeda é uma moeda digital que usa criptografia para garantir transações seguras, sem precisar de bancos ou governos. Funciona numa tecnologia chamada blockchain, que é como um livro-razão público onde todas as transações são registadas e verificadas por computadores em todo o mundo. Por exemplo, o Bitcoin permite enviar dinheiro diretamente a outra pessoa, sem intermediários, desde que ambos tenham carteiras digitais.'
  },
  {
    pergunta: 'O que é uma blockchain?',
    resposta: 'Uma blockchain é como um livro digital público que regista todas as transações de uma criptomoeda. É segura porque é gerida por muitos computadores em todo o mundo, sem um único controlador. Quando envias Bitcoin, a transação é gravada na blockchain para que todos saibam que é válida, tornando as criptomoedas transparentes e difíceis de falsificar.'
  },
  // ... (adicionar as restantes perguntas e respostas aqui, seguindo o mesmo padrão)
];

export default function FAQ() {
  const [search, setSearch] = useState('');
  const perguntasFiltradas = perguntasFAQ.filter(
    (item) =>
      item.pergunta.toLowerCase().includes(search.toLowerCase()) ||
      item.resposta.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">FAQ - Perguntas Frequentes</h1>
        <input
          type="text"
          placeholder="Pesquisar pergunta ou resposta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-8 w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
        />
        <div className="bg-[#18162A] bg-opacity-90 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Introdução ao FAQ</h2>
          <p className="mb-6">Oi, eu sou a Kyra! 🐶 Se estás a começar no mundo das criptomoedas, é normal teres mil e uma dúvidas. Aqui compilei um leque enorme de perguntas que os iniciantes mais fazem, com respostas simples para te ajudar a aprender, a sentir-te seguro e a dar os primeiros passos com confiança. Vamos explorar juntos?</p>
          <div className="space-y-6">
            {perguntasFiltradas.length === 0 ? (
              <p className="text-white text-center">Nenhuma pergunta encontrada.</p>
            ) : (
              perguntasFiltradas.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg mb-1">{idx + 1}. {item.pergunta}</h3>
                  <p>{item.resposta}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 