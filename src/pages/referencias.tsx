import React from 'react';
import Layout from '../components/Layout';

export default function referencias() {
  return (
    <Layout>
      <div className="flex flex-col items-center py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-8">Referências</h1>
        <div className="w-full max-w-4xl bg-black bg-opacity-70 rounded-lg shadow-lg p-8 space-y-8">
          {/* Secção 1 */}
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Secção 1: As Minhas Referências</h2>
          <div className="space-y-8">
            {/* Bruno Perini */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/bruno-perini.png" alt="Bruno Perini" className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Bruno Perini (Você MAIS Rico)</span>
                <p className="text-white mt-1">Bruno Perini, nascido no Rio de Janeiro em 1988, é um influenciador e investidor brasileiro, criador do canal "Você MAIS Rico" e do curso "Viver de Renda". Formado em Ciências Militares pela Academia Militar das Agulhas Negras, tornou-se milionário aos 29 anos e é sócio do Grupo Primo, ao lado de Thiago Nigro. Coapresentador do podcast "Os Sócios", os seus vídeos e cursos focam-se em independência financeira e foram essenciais para eu aprender a investir de forma segura e diversificada.</p>
              </div>
            </div>
            {/* Caio Vicentino */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/caio-vicentino.png" alt="Caio Vicentino" className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400" />
                <div className="flex gap-4 mt-2">
                  <a href="https://instagram.com/caiovicentino" target="_blank" rel="noopener noreferrer"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="https://www.youtube.com/@CaioVicentino" target="_blank" rel="noopener noreferrer"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Caio Vicentino</span>
                <p className="text-white mt-1">Caio Vicentino é um educador e investidor brasileiro, especialista em finanças descentralizadas (DeFi) e criador da comunidade Yield Hackers, que hoje tem mais de 1300 membros ativos. Formado pela Ivan on Tech como DeFi Expert, começou a investir em finanças em 2017 e descobriu as criptomoedas em 2018, apaixonando-se pelo tema. Foi embaixador da MakerDAO no Brasil, um dos maiores protocolos DeFi, e é palestrante em eventos cripto no país. No seu canal do YouTube (@CaioVicentino) e Instagram (@caiovicentino), partilha conteúdos educativos e faz lives diárias chamadas "Almoço Crypto". Venceu o Desafio Cripto 2021 na BitcoinTrade, com uma estratégia focada em Ethereum, e doou os lucros (R$ 11.388,08) ao Instituto Povo do Mar, no Ceará. Junto com Rogério Menezes, criou o curso "Renda Cripto", que me ajudou a entender DeFi e a gerar renda passiva com segurança.</p>
              </div>
            </div>
            {/* Felipe Sant'Ana */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/felipe-Santana.jpg" alt="Felipe Sant'Ana" className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Felipe Sant'Ana (Filipe "Ether")</span>
                <p className="text-white mt-1">Felipe Sant'Ana, conhecido como Filipe "Ether", é um investidor e educador brasileiro, cofundador da Paradigma Education, a primeira plataforma brasileira de educação e dados focada em criptomoedas. Graduado em Comunicação & Marketing pela ESPM-SP, já palestrou em eventos como o DWeb Summit e Web3 Summit, e co-produziu a série documental Around the Block (2017) sobre o Bitcoin. É autor da newsletter Café com Satoshi, uma das mais populares em português, e foi sócio da Paratii (2016-18), uma pioneira em streaming na Ethereum. A sua visão educativa e maximalista sobre Bitcoin inspirou-me a aprender sobre criptoativos de forma segura.</p>
              </div>
            </div>
            {/* Rogério Menezes */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/rogerio-menezes.png" alt="Rogério Menezes" className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400" />
                <div className="flex gap-4 mt-2">
                  <a href="https://instagram.com/rogerio_menezes" target="_blank" rel="noopener noreferrer"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="https://www.youtube.com/@RogérioMenezes" target="_blank" rel="noopener noreferrer"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Rogério Menezes</span>
                <p className="text-white mt-1">Rogério Menezes é um mentor e educador brasileiro no mercado de criptomoedas, com foco em estratégias de renda passiva através de pools de liquidez e DeFi. No seu canal do YouTube (@RogérioMenezes) e Instagram (@rogerio_menezes), partilha conteúdos sobre como rentabilizar tokens parados em carteiras, ganhando em dólar e cripto, com valores como transparência, responsabilidade, justiça e honestidade. Começou o seu canal em 2022, durante o Bear Market, para ser um porto seguro para quem busca oportunidades no mundo cripto. Junto com Caio Vicentino, criou o curso "Renda Cripto", que me ensinou a investir de forma segura e eficiente, com estratégias práticas para iniciantes e avançados.</p>
              </div>
            </div>
            {/* Thiago Nigro */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/thiago-nigro.jpg" alt="Thiago Nigro" className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Thiago Nigro (O Primo Rico)</span>
                <p className="text-white mt-1">Thiago Lolkus Nigro, nascido em São Paulo a 7 de outubro de 1990, é um influenciador, escritor e empresário brasileiro, conhecido como "Primo Rico". Formado em Relações Internacionais pela ESPM, alcançou a independência financeira aos 26 anos após trabalhar como assessor de investimentos e fundar a Investpartner. Em 2016, criou o canal "O Primo Rico" no YouTube, que hoje tem milhões de seguidores, e é CEO do Grupo Primo, um ecossistema de educação financeira. Autor do best-seller Do Mil ao Milhão: Sem Cortar o Cafezinho, Thiago inspira-me com a sua abordagem simples e prática sobre finanças.</p>
              </div>
            </div>
            {/* Podcast Os Sócios */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/os-socios.png" alt="Podcast Os Sócios" className="w-32 h-32 object-contain rounded-full border-4 border-yellow-400 bg-white" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="https://www.youtube.com/@OsSociosPodcast" target="_blank" rel="noopener noreferrer"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Podcast "Os Sócios"</span>
                <p className="text-white mt-1">"Os Sócios" é um podcast brasileiro do Grupo Primo, apresentado por Bruno Perini e Malu Perini, sua esposa e influenciadora na área de desenvolvimento pessoal. Lançado em 2021, aborda temas como finanças, empreendedorismo e desenvolvimento pessoal, com convidados como Thiago Nigro e outras personalidades. Com mais de 1,2 milhão de inscritos no YouTube, foi uma das minhas primeiras fontes de motivação para explorar o mundo cripto e aprender a gerir finanças.</p>
              </div>
            </div>
            {/* Podcast Primo Rico */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
               <img src="/images/referencias/primocast.png" alt="Podcast Os Sócios" className="w-32 h-32 object-contain rounded-full border-4 border-yellow-400 bg-white" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="https://www.youtube.com/@OPrimoRico" target="_blank" rel="noopener noreferrer"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Podcast "Primo Rico" (Primocast)</span>
                <p className="text-white mt-1">O "Primocast", também conhecido como "Primo Rico", é um podcast do Grupo Primo, apresentado por Thiago Nigro, Lucas Zafra e Kaique Torres. Lançado em 2018, é um dos maiores podcasts de finanças e negócios do Brasil, com mais de 200 episódios disponíveis no Spotify e YouTube. Aborda temas como investimentos, empreendedorismo e criptomoedas, com convidados como Whindersson Nunes e Luiz Barsi. Ouvi vários episódios que me ajudaram a entender o mercado cripto e a tomar decisões informadas.</p>
              </div>
            </div>
          </div>

          {/* Secção 2 */}
          <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-2">Secção 2: O Curso que Tirei</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
                <img src="/images/referencias/viver-de-renda-cripto.jpg" alt="Viver de Renda Cripto Turma 7" className="w-32 h-32 object-contain rounded-full border-4 border-yellow-400 bg-white" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Curso: Viver de Renda Cripto Turma 7 (Grupo Primo)</span>
                <p className="text-white mt-1">O curso "Viver de Renda Cripto Turma 7", do Grupo Primo, foi criado por Bruno Perini e Felipe Sant'Ana, um especialista em criptomoedas e sócio da Paradigma Education. Focado em ensinar a gerar renda passiva com criptoativos, o curso cobre desde os básicos (como o que é blockchain) até estratégias avançadas, como investir em pools de liquidez. Fiz este curso e aprendi a investir com segurança, a proteger os meus ativos e a criar uma fonte de rendimento estável.</p>
              </div>
            </div>
          </div>

          {/* Secção 3 */}
          <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-2">Secção 3: Plataformas Onde Estou Inscrito</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
              <img src="/images/referencias/paradigma-education.jpg" alt="Podcast Os Sócios" className="w-32 h-32 object-contain rounded-full border-4 border-yellow-400 bg-white" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Paradigma Education</span>
                <p className="text-white mt-1">A Paradigma Education é uma plataforma de análise de criptomoedas liderada por Felipe Sant'Ana, que faz parte da Paradigma Education, a primeira empresa brasileira de research totalmente focada em criptoativos. Oferece vídeos explicativos para todos os níveis, desde iniciantes (ex.: o que é Bitcoin) até avançados (ex.: análise de mercado), além de relatórios sobre NFTs e tendências cripto. Sou assinante e recomendo para quem quer aprender e acompanhar o mercado de forma informada. A Paradigma tem uma parceria com o Grupo Primo, que adquiriu uma participação minoritária em 2022, mas mantém a sua independência.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex flex-col items-center">
              <img src="/images/referencias/renda-cripto.png" alt="Podcast Os Sócios" className="w-32 h-32 object-contain rounded-full border-4 border-yellow-400 bg-white" />
                <div className="flex gap-4 mt-2">
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/instagram.png" alt="Instagram" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/x.png" alt="X" className="w-8 h-8 object-contain" /></a>
                  <a href="#" className="opacity-50 cursor-not-allowed"><img src="/images/icons/youtube.png" alt="YouTube" className="w-8 h-8 object-contain" /></a>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-lg font-bold text-blue-400">Renda Cripto (Caio Vicentino e Rogério Menezes)</span>
                <p className="text-white mt-1">A "Renda Cripto" (é uma plataforma de educação financeira criada por Caio Vicentino e Rogério Menezes, dois especialistas brasileiros em DeFi. Focada em transformar criptomoedas numa fonte de lucro, oferece uma imersão prática ao vivo para abrir operações em pools de liquidez, com mais de 57 horas de conteúdo e 17 treinamentos exclusivos. Estou inscrito e aprendi estratégias práticas para gerar renda passiva, desde os conceitos básicos até técnicas avançadas, com um método claro e seguro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
