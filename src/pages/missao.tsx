import React from 'react';
import Layout from '../components/Layout';

export default function Missao() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-8">A Nossa Missão no Kyra Crypto</h1>
        <div className="w-full max-w-3xl bg-black bg-opacity-70 rounded-lg shadow-lg p-8 space-y-6">
          <p className="text-white text-xl font-semibold text-center">Transformar o mundo das criptomoedas num lugar seguro e acessível para todos! <span role="img" aria-label="dog">🐶</span></p>
          <p className="text-white text-lg text-center">Auff, eu sou a Kyra! Quero ajudar-te a aprender e crescer no mundo cripto!</p>
          <h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-2">Porquê o Kyra Crypto?</h2>
          <p className="text-white">No Kyra Crypto, a nossa missão é simples: tornar o mundo das criptomoedas acessível e seguro para todos! Sabemos que o universo cripto pode parecer complicado, mas acreditamos que, com a orientação certa, qualquer pessoa pode aprender, investir e prosperar. Queremos ser o teu guia confiável, ajudando-te a dar os primeiros passos ou a explorar estratégias avançadas, sempre com segurança e clareza.</p>
          <h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-2">Os Valores que Nos Guiam</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li><span className="font-bold text-blue-400">Educação:</span> Acreditamos que o conhecimento é a chave para o sucesso. Oferecemos guias simples e recursos educativos para todos os níveis.</li>
            <li><span className="font-bold text-blue-400">Segurança:</span> A tua segurança é a nossa prioridade. Damos dicas e ferramentas para protegeres os teus investimentos.</li>
            <li><span className="font-bold text-blue-400">Comunidade:</span> Queremos criar uma comunidade de apoio, onde todos possam aprender e crescer juntos no mundo cripto.</li>
          </ul>
          <h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-2">A Nossa Promessa para Ti</h2>
          <p className="text-white">Prometemos estar sempre ao teu lado, como um amigo fiel, enquanto exploras o mundo das criptomoedas. Com a Kyra como tua guia, vais aprender a gatinhar, andar e, em breve, correr com confiança. Estamos aqui para te ajudar a alcançar os teus objetivos, de forma segura e divertida! Vamos aprender juntos? <span role="img" aria-label="dog">🐶</span></p>
        </div>
      </div>
    </Layout>
  );
} 