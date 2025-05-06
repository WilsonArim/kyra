import React, { useState } from 'react';
import Layout from '../components/Layout';

const glossario = [
  {
    letra: 'A',
    termos: [
      {
        termo: 'Address (Endereço)',
        desc: 'Um código único (como um número de conta) usado para enviar ou receber criptomoedas. Exemplo: um endereço Bitcoin é uma sequência de letras e números.'
      },
      {
        termo: 'Airdrop',
        desc: 'Distribuição gratuita de criptomoedas para promover um projeto ou atrair usuários. É como receber cupons ou amostras grátis.'
      },
      {
        termo: 'Altcoin',
        desc: 'Qualquer criptomoeda que não seja o Bitcoin. Exemplos: Ethereum, Ripple, Cardano. São "alternativas" ao Bitcoin.'
      },
      {
        termo: 'AML (Anti-Money Laundering)',
        desc: 'Regras para prevenir lavagem de dinheiro. Muitas exchanges exigem verificações (como KYC) para seguir essas leis.'
      },
      {
        termo: 'ATH (All-Time High)',
        desc: 'O maior preço que uma criptomoeda já atingiu. Exemplo: "O Bitcoin chegou ao ATH de $100.000 em 2024."'
      },
      {
        termo: 'ATL (All-Time Low)',
        desc: 'O menor preço que uma criptomoeda já alcançou. É o oposto de ATH.'
      },
    ]
  },
  {
    letra: 'B',
    termos: [
      {
        termo: 'Bagholder',
        desc: 'Alguém que mantém uma criptomoeda mesmo após uma grande queda de preço, esperando recuperação. É como segurar um investimento que "não deu certo".'
      },
      {
        termo: 'Bearish',
        desc: 'Uma visão ou tendência de que os preços das criptomoedas vão cair. Exemplo: "O mercado está bearish, os preços estão despencando."'
      },
      {
        termo: 'Bitcoin (BTC)',
        desc: 'A primeira criptomoeda, criada em 2009 por Satoshi Nakamoto. É um "dinheiro digital" que funciona sem bancos ou governos.'
      },
      {
        termo: 'Block',
        desc: 'Um grupo de transações registradas na blockchain. Cada bloco é como uma página em um livro de registros.'
      },
      {
        termo: 'Blockchain',
        desc: 'Um sistema digital que registra todas as transações de criptomoedas de forma segura, transparente e imutável. É como um caderno público onde ninguém pode apagar o que foi escrito.'
      },
      {
        termo: 'Block Reward',
        desc: 'A recompensa (em criptomoedas) dada aos mineradores por validar um bloco de transações. Exemplo: mineradores de Bitcoin recebem BTC.'
      },
      {
        termo: 'Bullish',
        desc: 'Uma visão ou tendência de que os preços das criptomoedas vão subir. Exemplo: "O mercado está bullish, todo mundo está comprando!"'
      },
      {
        termo: 'Bull Market',
        desc: 'Período em que os preços das criptomoedas estão subindo, com otimismo no mercado. É como um "touro" (bull) que sobe com força.'
      },
      {
        termo: 'Bear Market',
        desc: 'Período em que os preços das criptomoedas estão caindo, com pessimismo no mercado. É como um "urso" (bear) que hiberna.'
      },
    ]
  },
  {
    letra: 'C',
    termos: [
      {
        termo: 'Candlestick',
        desc: 'Um gráfico usado para mostrar a variação de preço de uma criptomoeda em um período. Cada "vela" mostra o preço inicial, final, máximo e mínimo.'
      },
      {
        termo: 'Carteira (Wallet)',
        desc: 'Um aplicativo, site ou dispositivo para armazenar, enviar e receber criptomoedas. É como uma conta bancária digital para cripto.'
      },
      {
        termo: 'Carteira Fria (Cold Wallet)',
        desc: 'Uma carteira offline (ex.: dispositivo USB) que mantém criptomoedas seguras contra hackers. É como um cofre.'
      },
      {
        termo: 'Carteira Quente (Hot Wallet)',
        desc: 'Uma carteira online (ex.: app ou site) prática, mas mais vulnerável a ataques. É como carregar dinheiro no bolso.'
      },
      {
        termo: 'CEX (Exchange Centralizada)',
        desc: 'Uma plataforma de troca de criptomoedas controlada por uma empresa, como Binance ou Coinbase. É como uma casa de câmbio tradicional.'
      },
      {
        termo: 'Circulating Supply',
        desc: 'A quantidade de unidades de uma criptomoeda disponíveis no mercado. Não inclui moedas "travadas" ou não lançadas.'
      },
      {
        termo: 'Consensus',
        desc: 'O acordo entre os computadores de uma blockchain sobre quais transações são válidas. É como um grupo decidindo juntos o que é verdade.'
      },
      {
        termo: 'Criptografia',
        desc: 'A tecnologia que protege as transações e carteiras de criptomoedas, garantindo segurança e privacidade. É como um código secreto.'
      },
      {
        termo: 'Criptomoeda',
        desc: 'Dinheiro digital que usa blockchain e criptografia para funcionar sem intermediários. Exemplos: Bitcoin, Ethereum.'
      },
    ]
  },
  {
    letra: 'D',
    termos: [
      {
        termo: 'DApp (Aplicativo Descentralizado)',
        desc: 'Um aplicativo que roda em blockchain, sem controle central. Exemplo: jogos ou plataformas financeiras que operam sem empresas.'
      },
      {
        termo: 'DAO (Organização Autônoma Descentralizada)',
        desc: 'Um grupo gerenciado por regras em blockchain, onde decisões são tomadas por votação dos membros. É como uma empresa sem chefe, controlada pela comunidade.'
      },
      {
        termo: 'DeFi (Finanças Descentralizadas)',
        desc: 'Serviços financeiros (empréstimos, investimentos) que usam blockchain e não dependem de bancos. É como um banco digital sem dono.'
      },
      {
        termo: 'Descentralização',
        desc: 'Quando um sistema não é controlado por uma única entidade. Na blockchain, muitos computadores no mundo mantêm a rede.'
      },
      {
        termo: 'DEX (Exchange Descentralizada)',
        desc: 'Uma plataforma onde você troca criptomoedas diretamente com outros, sem intermediários. É como um mercado livre online.'
      },
      {
        termo: 'Dumping',
        desc: 'Vender grandes quantidades de uma criptomoeda, causando queda de preço. É como inundar o mercado com um produto.'
      },
    ]
  },
  {
    letra: 'E',
    termos: [
      {
        termo: 'ERC-20',
        desc: 'Um padrão para criar tokens na blockchain Ethereum. Muitos tokens (como USDT) seguem esse formato.'
      },
      {
        termo: 'Ethereum (ETH)',
        desc: 'A segunda maior criptomoeda, que além de ser um "dinheiro digital", permite criar aplicativos e contratos inteligentes na sua blockchain.'
      },
      {
        termo: 'Exchange',
        desc: 'Plataforma para comprar, vender ou trocar criptomoedas. Exemplos: Binance, Kraken. É como uma casa de câmbio digital.'
      },
    ]
  },
  {
    letra: 'F',
    termos: [
      {
        termo: 'Faucet',
        desc: 'Sites ou apps que dão pequenas quantidades de criptomoedas grátis para iniciantes experimentarem. É como ganhar moedas para testar.'
      },
      {
        termo: 'Fiat',
        desc: 'Moedas tradicionais emitidas por governos, como real, dólar ou euro. Usadas para comprar criptomoedas.'
      },
      {
        termo: 'FOMO (Fear of Missing Out)',
        desc: 'Medo de perder uma oportunidade, como comprar uma cripto quando ela sobe muito. É a sensação de "todo mundo está lucrando, menos eu".'
      },
      {
        termo: 'Fork',
        desc: 'Uma mudança nas regras de uma blockchain. Um "soft fork" é uma pequena atualização; um "hard fork" cria uma nova criptomoeda (ex.: Bitcoin Cash).'
      },
      {
        termo: 'FUD (Fear, Uncertainty, Doubt)',
        desc: 'Notícias ou rumores negativos espalhados para assustar investidores e fazer preços caírem. É como boatos que causam pânico.'
      },
    ]
  },
  {
    letra: 'G',
    termos: [
      {
        termo: 'Gas',
        desc: 'A taxa paga para realizar transações ou executar contratos em blockchains como Ethereum. É o "combustível" da rede.'
      },
      {
        termo: 'Genesis Block',
        desc: 'O primeiro bloco de uma blockchain. É como a primeira página do livro de registros.'
      },
    ]
  },
  {
    letra: 'H',
    termos: [
      {
        termo: 'Halving',
        desc: 'Evento que reduz pela metade a recompensa por minerar blocos (ex.: no Bitcoin, a cada 4 anos). Torna a cripto mais rara, podendo aumentar seu preço.'
      },
      {
        termo: 'Hash',
        desc: 'Um código único gerado por um processo matemático para proteger e identificar transações na blockchain. É como uma impressão digital.'
      },
      {
        termo: 'HODL',
        desc: 'Termo que significa "segurar" criptomoedas, mesmo com quedas de preço, em vez de vender. Vem de um erro de digitação de "hold".'
      },
    ]
  },
  {
    letra: 'I',
    termos: [
      {
        termo: 'ICO (Oferta Inicial de Moedas)',
        desc: 'Quando um projeto lança uma criptomoeda para arrecadar fundos. É como uma "vaquinha" onde você recebe moedas digitais.'
      },
      {
        termo: 'Immutable',
        desc: 'Algo que não pode ser alterado. Na blockchain, transações são imutáveis, ou seja, não podem ser apagadas ou modificadas.'
      },
    ]
  },
  {
    letra: 'K',
    termos: [
      {
        termo: 'KYC (Know Your Customer)',
        desc: 'Verificação de identidade exigida por exchanges para cumprir leis. É como mostrar documentos para abrir uma conta bancária.'
      },
    ]
  },
  {
    letra: 'L',
    termos: [
      {
        termo: 'Layer 1',
        desc: 'A blockchain principal, que opera de forma independente e lida com consenso, validação de transações e produção de blocos. Exemplos: Bitcoin, Ethereum, Solana, BNB Chain, Sui. É a base onde tudo acontece.'
      },
      {
        termo: 'Layer 2',
        desc: 'Soluções construídas sobre uma blockchain de Layer 1 para aumentar a escalabilidade e reduzir custos, mantendo a segurança do Layer 1. Exemplos: Base, Arbitrum, Optimism (para Ethereum), Lightning Network (para Bitcoin). É como uma "extensão" que melhora a eficiência.'
      },
      {
        termo: 'Ledger',
        desc: 'O registro de todas as transações em uma blockchain. É como um extrato bancário público e imutável.'
      },
      {
        termo: 'Liquidity (Liquidez)',
        desc: 'Quão fácil é comprar ou vender uma criptomoeda sem afetar seu preço. Mais liquidez = mais fácil negociar.'
      },
    ]
  },
  {
    letra: 'M',
    termos: [
      {
        termo: 'Market Cap (Capitalização de Mercado)',
        desc: 'O valor total de uma criptomoeda (preço x quantidade em circulação). Exemplo: se o Bitcoin vale $50.000 e tem 19 milhões de moedas, o market cap é $950 bilhões.'
      },
      {
        termo: 'Mempool',
        desc: 'O "estoque" de transações esperando para serem confirmadas na blockchain. É como uma fila de espera.'
      },
      {
        termo: 'Mineração',
        desc: 'Usar computadores para resolver problemas matemáticos e validar transações na blockchain, ganhando criptomoedas como recompensa. É como "extrair" moedas digitais.'
      },
      {
        termo: 'Moeda Estável (Stablecoin)',
        desc: 'Uma criptomoeda com valor fixo, geralmente ligado ao dólar (ex.: USDT, USDC). Evita a volatilidade das criptos.'
      },
      {
        termo: 'Mooning',
        desc: 'Quando o preço de uma criptomoeda sobe muito rápido. É como dizer que o preço "foi pra lua".'
      },
    ]
  },
  {
    letra: 'N',
    termos: [
      {
        termo: 'NFT (Token Não Fungível)',
        desc: 'Um item digital único registrado na blockchain, como arte, música ou itens de jogos. É como um certificado de posse digital.'
      },
      {
        termo: 'Nó (Node)',
        desc: 'Um computador que participa da rede blockchain, validando transações e mantendo a segurança. É como um voluntário da rede.'
      },
    ]
  },
  {
    letra: 'P',
    termos: [
      {
        termo: 'P2P (Peer-to-Peer)',
        desc: 'Transações diretas entre duas pessoas, sem intermediários. A blockchain usa esse sistema para transferências.'
      },
      {
        termo: 'Par Chave Pública/Privada',
        desc: 'Dois códigos para gerenciar criptomoedas. A chave pública é o "endereço" para receber; a chave privada é a "senha" para gastar. Nunca compartilhe a privada!'
      },
      {
        termo: 'Proof of Stake (PoS)',
        desc: 'Sistema onde você "aposta" criptomoedas para validar transações e ganhar recompensas. É mais ecológico que a mineração.'
      },
      {
        termo: 'Proof of Work (PoW)',
        desc: 'Sistema (usado pelo Bitcoin) onde mineradores resolvem problemas complexos para validar transações. Consome muita energia.'
      },
      {
        termo: 'Pump and Dump',
        desc: 'Golpe onde o preço de uma criptomoeda é inflado artificialmente (pump) e depois vendido (dump), deixando outros com prejuízo.'
      },
    ]
  },
  {
    letra: 'R',
    termos: [
      {
        termo: 'Rug Pull',
        desc: 'Golpe onde criadores de um projeto desaparecem com o dinheiro dos investidores. É como uma loja que some após vender produtos falsos.'
      },
    ]
  },
  {
    letra: 'S',
    termos: [
      {
        termo: 'Satoshi',
        desc: 'A menor unidade do Bitcoin (1 BTC = 100 milhões de satoshis). É como centavos para o real.'
      },
      {
        termo: 'Smart Contract',
        desc: 'Contrato digital que executa ações automaticamente quando condições são atendidas. Exemplo: "pagar X quando Y acontece". Funciona sem intermediários.'
      },
      {
        termo: 'Staking',
        desc: '"Trancar" criptomoedas em uma rede para ajudar na validação de transações e ganhar recompensas. É como investir e receber juros.'
      },
    ]
  },
  {
    letra: 'T',
    termos: [
      {
        termo: 'Token',
        desc: 'Criptomoeda criada em uma blockchain existente (ex.: Ethereum). Diferente de uma "moeda" (como Bitcoin), que tem sua própria blockchain.'
      },
      {
        termo: 'Total Supply',
        desc: 'A quantidade total de unidades de uma criptomoeda que existirão. Inclui moedas em circulação e as ainda não lançadas.'
      },
      {
        termo: 'Transaction Fee (Taxa de Transação)',
        desc: 'O custo para enviar criptomoedas ou executar ações na blockchain. Varia conforme a rede e a demanda.'
      },
    ]
  },
  {
    letra: 'V',
    termos: [
      {
        termo: 'Volatilidade',
        desc: 'As grandes variações de preço das criptomoedas, que podem subir ou cair muito em pouco tempo, diferente de moedas tradicionais.'
      },
    ]
  },
  {
    letra: 'W',
    termos: [
      {
        termo: 'Web3',
        desc: 'A nova geração da internet, baseada em blockchain, onde usuários controlam seus dados e transações, sem grandes empresas.'
      },
      {
        termo: 'Whale (Baleia)',
        desc: 'Alguém que possui grandes quantidades de uma criptomoeda e pode influenciar o mercado. É como um "grande jogador" financeiro.'
      },
      {
        termo: 'Whitepaper',
        desc: 'Documento que explica o propósito, tecnologia e planos de um projeto de criptomoeda. É como o "manual" da cripto.'
      },
    ]
  },
  {
    letra: 'Y',
    termos: [
      {
        termo: 'Yield Farming',
        desc: 'Investir criptomoedas em plataformas DeFi para ganhar recompensas, como juros. É como uma poupança de alto risco e retorno.'
      },
    ]
  },
];

export default function Glossario() {
  const [search, setSearch] = useState('');

  // Função para filtrar os termos
  const glossarioFiltrado = glossario.map((grupo) => ({
    ...grupo,
    termos: grupo.termos.filter((item) =>
      item.termo.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((grupo) => grupo.termos.length > 0);

  return (
    <Layout>
      <div className="flex flex-col items-center py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-10">Glossário</h1>
        <input
          type="text"
          placeholder="Pesquisar termo ou definição..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-8 w-full max-w-3xl px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
        />
        <div className="w-full max-w-3xl bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
          {glossarioFiltrado.length === 0 ? (
            <p className="text-white text-center">Nenhum termo encontrado.</p>
          ) : (
            glossarioFiltrado.map((grupo) => (
              <div key={grupo.letra} className="mb-8">
                <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 border-b border-yellow-400 pb-1">{grupo.letra}</h2>
                <ul className="space-y-4">
                  {grupo.termos.map((item) => (
                    <li key={item.termo}>
                      <span className="text-lg font-bold text-blue-400">{item.termo}</span>
                      <span className="block text-white ml-2 mt-1">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
} 